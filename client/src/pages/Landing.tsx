/**
 * Landing Page - Well Estate Group
 * Public front-end — no password required
 * Uses exact same design system as rest of site:
 * - font-display (Playfair Display) for headings
 * - font-body (DM Sans) for body text
 * - font-mono (Space Mono) for labels/eyebrows
 * - Gold #B8860B accents, framer-motion animations
 * Sections: Hero → About → Leadership → Solutions → Differentiator → Contact
 */

import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] } },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

export default function Landing() {
  const [scrollY, setScrollY] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setStatsVisible(true);
        });
      },
      { threshold: 0.3 }
    );
    
    if (statsRef.current) observer.observe(statsRef.current);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-[#0A0A0A]">
      {/* Navigation - matches Layout.tsx exactly */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl bg-white/97"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number] }}
        style={{ boxShadow: scrollY > 50 ? '0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.03)' : 'none' }}
      >
        <div className="w-full px-6 lg:px-10 xl:px-16 flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3 group">
            <motion.img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/LHselcWIkeWDRNuE.png" 
              alt="Well Estate Group" 
              className="w-10 h-10"
              whileHover={{ rotate: 360, scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <span className="font-display text-lg font-bold tracking-[0.04em] group-hover:text-[#B8860B] transition-colors whitespace-nowrap text-black">
              WELL ESTATE GROUP
            </span>
          </a>
          <div className="hidden md:flex items-center gap-1 font-body text-xs">
            <a href="#about" className="px-3.5 py-1.5 rounded-lg text-black/70 border border-[#B8860B]/40 hover:text-black hover:border-[#B8860B]/60 hover:bg-[#B8860B]/[0.03] transition-all">About</a>
            <a href="#leadership" className="px-3.5 py-1.5 rounded-lg text-black/70 border border-[#B8860B]/40 hover:text-black hover:border-[#B8860B]/60 hover:bg-[#B8860B]/[0.03] transition-all">Leadership</a>
            <a href="#solutions" className="px-3.5 py-1.5 rounded-lg text-black/70 border border-[#B8860B]/40 hover:text-black hover:border-[#B8860B]/60 hover:bg-[#B8860B]/[0.03] transition-all">Solutions</a>
            <a href="#contact" className="px-3.5 py-1.5 rounded-lg text-white font-semibold border-2 border-[#B8860B] bg-[#B8860B] shadow-[0_2px_8px_rgba(184,134,11,0.25)] hover:bg-[#9a7209] transition-all">Partner with Us</a>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-white" />
          {/* Corner accents matching LightHero */}
          <svg className="absolute top-24 left-10 w-20 h-20 opacity-[0.06]" viewBox="0 0 100 100">
            <line x1="0" y1="0" x2="80" y2="0" stroke="#B8860B" strokeWidth="0.75" />
            <line x1="0" y1="0" x2="0" y2="80" stroke="#B8860B" strokeWidth="0.75" />
          </svg>
          <svg className="absolute bottom-24 right-10 w-20 h-20 opacity-[0.06]" viewBox="0 0 100 100">
            <line x1="20" y1="100" x2="100" y2="100" stroke="#B8860B" strokeWidth="0.75" />
            <line x1="100" y1="20" x2="100" y2="100" stroke="#B8860B" strokeWidth="0.75" />
          </svg>
        </div>
        
        <motion.div 
          className="relative z-10 max-w-5xl mx-auto px-6 text-center"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {/* Eyebrow with gold line accents - matching LightHero */}
          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4 mb-6">
            <span className="w-10 h-[1px] bg-[#B8860B]/50" />
            <span className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.3em] uppercase">
              Premium Wellness Consulting
            </span>
            <span className="w-10 h-[1px] bg-[#B8860B]/50" />
          </motion.div>
          
          {/* Title - font-display (Playfair Display) */}
          <motion.h1 
            variants={fadeInUp}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] mb-6 text-black tracking-tight"
          >
            Where Wellness Meets<br />
            <em className="italic font-light text-[#B8860B]">World-Class Execution</em>
          </motion.h1>

          {/* Gold accent bar */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="h-[2px] w-14 mx-auto bg-[#B8860B] mb-6"
          />
          
          {/* Description - font-body (DM Sans) */}
          <motion.p 
            variants={fadeInUp}
            className="font-body text-base md:text-lg text-black/70 leading-relaxed max-w-2xl mx-auto mb-10"
          >
            The only consulting firm in wellness led by a former global executive who has actually 
            built and operated wellness programs for the world's most prestigious brands.
          </motion.p>
          
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#solutions" className="group px-8 py-4 bg-black text-white font-body text-sm tracking-[0.1em] uppercase rounded-full hover:bg-black/90 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
              Explore Our Solutions
              <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#about" className="px-8 py-4 font-body text-sm tracking-[0.1em] uppercase border border-black/20 rounded-full hover:border-black/60 hover:bg-black/[0.02] transition-all">
              Our Story
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom border - matching LightHero */}
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#B8860B]/40 to-transparent" />
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left - Visual */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden relative border border-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <img 
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/LHselcWIkeWDRNuE.png" 
                      alt="Well Estate Group" 
                      className="w-24 h-24 mx-auto mb-6 opacity-80"
                    />
                    <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-black/40 font-medium">Est. 2020</p>
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/30 mt-2">Houston, Texas</p>
                  </div>
                </div>
                {/* Corner accents */}
                <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-[#B8860B]/30" />
                <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-[#B8860B]/30" />
              </div>
            </motion.div>

            {/* Right - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <span className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.3em] uppercase">About</span>
              <h2 className="font-display text-3xl md:text-5xl font-semibold mt-3 mb-8 text-black tracking-tight">Well Estate Group</h2>
              
              <div className="space-y-5 font-body text-[15px] text-black/70 leading-[1.8]">
                <p>
                  Well Estate Group was founded by a former global executive at <strong className="text-black font-semibold">Technogym</strong> — the world leader in premium fitness and wellness solutions — where he led the design, implementation, and operation of wellness programs for the world's most demanding brands across hospitality, cruise, real estate, private clubs, and professional sports.
                </p>
                <p>
                  Unlike firms that only advise, WEG brings direct operational experience at the highest level. We've stood on the bridge of cruise ships, walked the floors of Platinum Clubs, and built wellness centers from architectural concept through daily operations.
                </p>
                <p className="text-black font-semibold text-base">
                  That's the difference between theory and execution.
                </p>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 mt-8 font-body text-sm tracking-[0.1em] uppercase text-[#B8860B] hover:text-black transition-colors group font-medium">
                Partner with us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} className="py-20 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              { value: '15+', label: 'Years Leading Global Wellness' },
              { value: '144+', label: 'Vessel Network' },
              { value: '5+', label: 'Longevity Centers Built' },
              { value: '$5.6T', label: 'Global Wellness Economy' },
            ].map((stat, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-white tracking-tight mb-3">{stat.value}</p>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-white/50 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 md:py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.3em] uppercase">
              Leadership
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-semibold mt-3 text-black tracking-tight">
              Built by an Operator,<br />Not a Theorist
            </motion.h2>
          </motion.div>

          <motion.div 
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_40px_rgba(0,0,0,0.04)] border border-[#B8860B]/20">
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                <div className="text-center md:text-left">
                  <div className="w-36 h-36 rounded-2xl overflow-hidden mx-auto md:mx-0 mb-4 ring-2 ring-[#B8860B]/20 ring-offset-2">
                    <img
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663276264373/FvgOMwymrJGxXgrc.webp"
                      alt="Shawn Buchheit"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                    />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-black">Shawn Buchheit</h3>
                  <p className="font-body text-sm text-black/50 mt-1">Founder & President</p>
                </div>
                <div className="space-y-4 font-body text-[15px] text-black/70 leading-[1.8]">
                  <p>
                    <strong className="text-black font-semibold">Founding team member, President & COO of Fountain Life</strong> — a physician-led longevity and regenerative medicine platform backed by Tony Robbins and Peter Diamandis. Shawn built and scaled the operational infrastructure from concept to multi-center execution, overseeing clinical operations, membership growth, and the technology platform.
                  </p>
                  <p>
                    Former global executive at <strong className="text-black font-semibold">Technogym</strong> — the world leader in premium fitness and wellness solutions — where he led wellness strategy and implementation across four global regions for the world's most prestigious hospitality groups, cruise lines, luxury real estate, private clubs, and professional sports organizations. Managed a network of 144+ cruise vessels, Platinum Clubs of America, and NFL/MLB training facilities.
                  </p>
                  <p>
                    Prior to Technogym, recognized as an award-winning employee at <strong className="text-black font-semibold">The Ritz-Carlton Hotel Company</strong>, where he developed his foundation in world-class service delivery and operational excellence at the highest level of luxury hospitality.
                  </p>
                  <p>
                    A <strong className="text-black font-semibold">FAA-certified commercial pilot</strong>, Shawn brings the same precision, discipline, and systems-thinking to wellness operations that aviation demands — where there is no margin for error.
                  </p>
                  <p className="text-black font-semibold text-base">
                    From Ritz-Carlton to Technogym to Fountain Life — this isn't advisory from a distance. This is leadership forged in execution.
                  </p>
                  
                  {/* Credentials */}
                  <div className="pt-6 border-t border-gray-100 mt-6">
                    <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4 font-medium">Key Partnerships & Associations</p>
                    <div className="flex flex-wrap gap-2">
                      {['Fountain Life', 'Technogym', 'Ritz-Carlton', 'Platinum Clubs of America', 'CMAA', 'PGA', 'NFL', 'MLB', 'NCAA', 'Troon', 'OneSpaWorld'].map((name) => (
                        <span key={name} className="font-body text-[11px] px-3 py-1.5 bg-gray-50 border border-gray-200/80 rounded-full text-black/60 font-medium">
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.3em] uppercase">
              Solutions
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-semibold mt-3 mb-4 text-black tracking-tight">
              What We Deliver
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/65 max-w-2xl mx-auto">
              Institutional-grade consulting, business planning, and go-to-market strategy for companies ready to scale in the global wellness economy.
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
                title: 'Go-To-Market Strategy',
                desc: 'Strategic market entry, sales infrastructure, and commercial acceleration for wellness and fitness brands entering new markets or scaling existing operations.',
              },
              {
                num: '02',
                title: 'Longevity Center Development',
                desc: 'Full business planning, unit economics, clinical protocol design, and operational strategy for physician-led regenerative medicine centers.',
              },
              {
                num: '03',
                title: 'Product Intelligence',
                desc: 'Independent clinical evaluation, competitive analysis, and development advisory for next-generation wellness and longevity products.',
              },
              {
                num: '04',
                title: 'Venture & Capital Advisory',
                desc: 'Strategic investment guidance and advisory for emerging fitness, wellness, and longevity products poised to disrupt the consumer health market.',
              },
            ].map((service) => (
              <motion.div 
                key={service.num} 
                variants={fadeInUp}
                className="group p-8 md:p-10 border border-[#B8860B]/20 rounded-2xl hover:border-[#B8860B]/50 hover:shadow-[0_8px_40px_rgba(184,134,11,0.06)] transition-all duration-500 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B8860B]/0 via-[#B8860B]/40 to-[#B8860B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="font-mono text-[11px] tracking-[0.2em] text-[#B8860B] font-semibold">{service.num}</span>
                <h3 className="font-display text-xl md:text-2xl font-medium mt-3 mb-4 text-black">{service.title}</h3>
                <p className="font-body text-[15px] text-black/60 leading-relaxed">{service.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.3em] uppercase">
              The Difference
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-semibold mt-3 text-white tracking-tight">
              Others Consult.<br />
              <span className="italic font-light text-[#B8860B]">We Build.</span>
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 md:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {[
              {
                title: 'Operational Authority',
                desc: 'Led by a founding team member and President/COO of Fountain Life, and a former Technogym global executive. Not theorists — operators who have built and run wellness at the highest level.',
              },
              {
                title: 'Global Scale',
                desc: 'From multi-center longevity platforms to 144+ cruise vessels to Platinum Clubs to NFL training facilities — we\'ve built and operated at a scale no other wellness consultancy can match.',
              },
              {
                title: 'End-to-End Delivery',
                desc: 'Strategy through operations. Concept through daily execution. We don\'t hand off a deck and walk away — we build it, staff it, and run it.',
              },
            ].map((item, i) => (
              <motion.div key={i} variants={fadeInUp} className="text-center md:text-left">
                <div className="w-10 h-10 rounded-full border border-[#B8860B]/40 flex items-center justify-center mb-5 mx-auto md:mx-0">
                  <span className="font-mono text-xs text-[#B8860B] font-semibold">{i + 1}</span>
                </div>
                <h3 className="font-display text-xl font-medium mb-3 text-white">{item.title}</h3>
                <p className="font-body text-[15px] text-white/55 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 md:py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.3em] uppercase">
              Partnership
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-semibold mt-3 mb-6 text-black tracking-tight">
              Ready to Elevate?
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base md:text-lg text-black/65 max-w-2xl mx-auto mb-12 leading-relaxed">
              Whether you're launching a longevity center, scaling a wellness brand, or transforming your hospitality wellness offering — we bring the experience to make it exceptional.
            </motion.p>
            
            <motion.a 
              variants={fadeInUp}
              href="mailto:shawn@wellestategroup.com" 
              className="group inline-flex items-center gap-3 px-10 py-5 bg-black text-white font-body text-sm tracking-[0.15em] uppercase rounded-full hover:bg-black/90 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5"
            >
              Get in Touch
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-50/80 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/LHselcWIkeWDRNuE.png" 
                  alt="Well Estate Group" 
                  className="w-8 h-8"
                />
                <span className="font-display text-sm font-bold tracking-[0.04em]">WELL ESTATE GROUP</span>
              </div>
              <p className="font-body text-sm text-black/50 leading-relaxed">
                Premium consulting for the global wellness economy.<br />
                Strategy. Implementation. Operations.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4 font-medium">Explore</p>
              <div className="space-y-2">
                <a href="/longevity/luxury" className="block font-body text-sm text-black/60 hover:text-black transition-colors">Longevity Ventures</a>
                <a href="/gtm" className="block font-body text-sm text-black/60 hover:text-black transition-colors">Go-To-Market Strategy</a>
                <a href="/product-intelligence" className="block font-body text-sm text-black/60 hover:text-black transition-colors">Product Intelligence</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40 mb-4 font-medium">Contact</p>
              <div className="space-y-2">
                <a href="mailto:shawn@wellestategroup.com" className="block font-body text-sm text-black/60 hover:text-black transition-colors">shawn@wellestategroup.com</a>
                <p className="font-body text-sm text-black/50">Houston, TX</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="font-body text-xs text-black/35">&copy; 2026 Well Estate Group. All rights reserved.</p>
            <p className="font-body text-xs text-black/35">Private & Confidential</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
