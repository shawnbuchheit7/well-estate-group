/**
 * Landing Page - Well Estate Group
 * Public front-end — no password required
 * Premium luxury design matching the rest of the site
 * Sections: Hero → About → Leadership → Solutions → Proof → Differentiator → Contact
 */

import { useEffect, useState, useRef } from 'react';

export default function Landing() {
  const [visible, setVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Intersection observer for stats animation
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
    <div className="min-h-screen bg-white text-black font-sans antialiased">
      {/* Navigation - matches Layout.tsx style */}
      <nav 
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-2xl transition-all duration-300"
        style={{ 
          backgroundColor: scrollY > 50 ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.95)',
          boxShadow: scrollY > 50 ? '0 1px 3px rgba(0,0,0,0.04), 0 4px 20px rgba(0,0,0,0.03)' : 'none'
        }}
      >
        <div className="w-full px-6 lg:px-10 xl:px-16 flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3 group">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/LHselcWIkeWDRNuE.png" 
              alt="Well Estate Group" 
              className="w-10 h-10 transition-transform duration-500 group-hover:rotate-[360deg] group-hover:scale-110"
            />
            <span className="text-lg font-bold tracking-[0.04em] group-hover:text-[#B8860B] transition-colors whitespace-nowrap">
              WELL ESTATE GROUP
            </span>
          </a>
          <div className="hidden md:flex items-center gap-1">
            <a href="#about" className="px-3.5 py-1.5 text-xs rounded-lg text-black/70 border border-[#B8860B]/40 hover:text-black hover:border-[#B8860B]/60 hover:bg-[#B8860B]/[0.03] transition-all">About</a>
            <a href="#leadership" className="px-3.5 py-1.5 text-xs rounded-lg text-black/70 border border-[#B8860B]/40 hover:text-black hover:border-[#B8860B]/60 hover:bg-[#B8860B]/[0.03] transition-all">Leadership</a>
            <a href="#solutions" className="px-3.5 py-1.5 text-xs rounded-lg text-black/70 border border-[#B8860B]/40 hover:text-black hover:border-[#B8860B]/60 hover:bg-[#B8860B]/[0.03] transition-all">Solutions</a>
            <a href="#contact" className="px-3.5 py-1.5 text-xs rounded-lg text-white font-semibold border-2 border-[#B8860B] bg-[#B8860B] shadow-[0_2px_8px_rgba(184,134,11,0.25)] hover:bg-[#9a7209] transition-all">Partner with Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section - Full viewport with cinematic feel */}
      <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/[0.02] via-transparent to-white" />
          <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-br from-gray-50 via-white to-gray-50/50" />
          {/* Subtle geometric accent */}
          <div className="absolute top-1/4 right-[10%] w-96 h-96 rounded-full bg-[#B8860B]/[0.02] blur-3xl" />
          <div className="absolute bottom-1/4 left-[5%] w-80 h-80 rounded-full bg-gray-100/50 blur-3xl" />
        </div>
        
        <div className={`relative z-10 max-w-5xl mx-auto px-6 text-center transition-all duration-1200 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
          {/* Premium badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/[0.03] border border-black/[0.06] mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-[#B8860B] animate-pulse" />
            <span className="text-[11px] tracking-[0.3em] uppercase text-black/60 font-medium">Premium Wellness Consulting</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-normal leading-[1.05] mb-8 tracking-[-0.02em]">
            Where Wellness Meets<br />
            <span className="italic text-[#B8860B]">World-Class Execution</span>
          </h1>
          
          <p className="text-lg md:text-xl text-black/60 leading-relaxed max-w-2xl mx-auto mb-12">
            The only consulting firm in wellness led by a former global executive who has actually 
            built and operated wellness programs for the world's most prestigious brands.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#solutions" className="group px-8 py-4 bg-black text-white text-sm tracking-[0.1em] uppercase rounded-full hover:bg-black/90 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:-translate-y-0.5">
              Explore Our Solutions
              <svg className="inline-block ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </a>
            <a href="#about" className="px-8 py-4 text-sm tracking-[0.1em] uppercase border border-black/20 rounded-full hover:border-black/60 hover:bg-black/[0.02] transition-all">
              Our Story
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-[10px] tracking-[0.2em] uppercase text-black/30">Scroll</span>
            <div className="w-px h-8 bg-gradient-to-b from-black/20 to-transparent" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left - Visual */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl overflow-hidden relative border border-gray-100">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <img 
                      src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/LHselcWIkeWDRNuE.png" 
                      alt="Well Estate Group" 
                      className="w-24 h-24 mx-auto mb-6 opacity-80"
                    />
                    <p className="text-xs tracking-[0.3em] uppercase text-black/40 font-medium">Est. 2020</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-black/30 mt-2">Houston, Texas</p>
                  </div>
                </div>
                {/* Corner accents */}
                <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-[#B8860B]/30" />
                <div className="absolute bottom-6 left-6 w-16 h-16 border-b border-l border-[#B8860B]/30" />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B8860B]/[0.06] mb-6">
                <span className="text-[11px] tracking-[0.25em] uppercase text-[#B8860B] font-medium">About</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-normal mb-8 tracking-[-0.01em]">Well Estate Group</h2>
              
              <div className="space-y-5 text-black/65 leading-[1.8] text-[15px]">
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

              <a href="#contact" className="inline-flex items-center gap-2 mt-8 text-sm tracking-[0.1em] uppercase text-[#B8860B] hover:text-black transition-colors group font-medium">
                Partner with us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section ref={statsRef} className="py-20 bg-black text-white relative overflow-hidden">
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
            {[
              { value: '15+', label: 'Years Leading Global Wellness' },
              { value: '144+', label: 'Vessel Network' },
              { value: '4', label: 'Global Regions' },
              { value: '$5.6T', label: 'Global Wellness Economy' },
            ].map((stat, i) => (
              <div 
                key={i} 
                className={`transition-all duration-700 ${statsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <p className="text-4xl md:text-5xl font-serif mb-3 text-white">{stat.value}</p>
                <p className="text-[11px] tracking-[0.2em] uppercase text-white/50">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 md:py-32 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B8860B]/[0.06] mb-6">
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#B8860B] font-medium">Leadership</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-normal tracking-[-0.01em]">Built by an Operator,<br />Not a Theorist</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_40px_rgba(0,0,0,0.04)] border border-gray-100/80">
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                <div className="text-center md:text-left">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 mx-auto md:mx-0 flex items-center justify-center mb-4 ring-2 ring-[#B8860B]/20 ring-offset-2">
                    <span className="text-3xl font-serif text-black/40">SB</span>
                  </div>
                  <h3 className="text-xl font-serif font-medium">Shawn Buchheit</h3>
                  <p className="text-sm text-black/50 mt-1">Founder & President</p>
                </div>
                <div className="space-y-4 text-black/65 leading-[1.8] text-[15px]">
                  <p>
                    Former global executive at <strong className="text-black font-semibold">Technogym</strong>, where he led wellness strategy and implementation for the world's most prestigious hospitality groups, cruise lines, luxury real estate developments, private clubs, and professional sports organizations.
                  </p>
                  <p>
                    With over 15 years at the intersection of fitness, wellness, and luxury operations, Shawn has personally designed, built, and managed wellness programs across four global regions — from 144+ cruise vessels to Platinum Clubs of America to NFL and MLB training facilities.
                  </p>
                  <p>
                    Prior to Technogym, Shawn was recognized as an award-winning employee at <strong className="text-black font-semibold">The Ritz-Carlton Hotel Company</strong>, where he developed his foundation in world-class service delivery and operational excellence at the highest level of luxury hospitality.
                  </p>
                  <p>
                    A <strong className="text-black font-semibold">FAA-certified commercial pilot</strong>, Shawn brings the same precision, discipline, and systems-thinking to wellness operations that aviation demands — where there is no margin for error.
                  </p>
                  <p className="text-black font-semibold text-base">
                    This isn't advisory from a distance. This is leadership forged in execution.
                  </p>
                  
                  {/* Credentials */}
                  <div className="pt-6 border-t border-gray-100 mt-6">
                    <p className="text-[11px] tracking-[0.2em] uppercase text-black/40 mb-4 font-medium">Key Partnerships & Associations</p>
                    <div className="flex flex-wrap gap-2">
                      {['Technogym', 'Ritz-Carlton', 'Platinum Clubs of America', 'CMAA', 'PGA', 'NFL', 'MLB', 'NCAA', 'Troon', 'OneSpaWorld'].map((name) => (
                        <span key={name} className="text-[11px] px-3 py-1.5 bg-gray-50 border border-gray-200/80 rounded-full text-black/60 font-medium">
                          {name}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B8860B]/[0.06] mb-6">
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#B8860B] font-medium">Solutions</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 tracking-[-0.01em]">What We Deliver</h2>
            <p className="text-black/60 max-w-2xl mx-auto text-[15px] leading-relaxed">
              Institutional-grade consulting, business planning, and go-to-market strategy for companies ready to scale in the global wellness economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
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
              <div key={service.num} className="group p-8 md:p-10 border border-gray-200/80 rounded-2xl hover:border-[#B8860B]/40 hover:shadow-[0_8px_40px_rgba(184,134,11,0.06)] transition-all duration-500 relative overflow-hidden">
                {/* Hover accent */}
                <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#B8860B]/0 via-[#B8860B]/40 to-[#B8860B]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="text-[11px] tracking-[0.2em] text-[#B8860B] font-semibold">{service.num}</span>
                <h3 className="text-2xl font-serif font-medium mt-3 mb-4 tracking-[-0.01em]">{service.title}</h3>
                <p className="text-black/60 leading-relaxed text-[15px]">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="py-24 md:py-32 bg-black text-white relative overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        <div className="max-w-6xl mx-auto px-6 md:px-12 relative">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-white/[0.08] mb-6">
              <span className="text-[11px] tracking-[0.25em] uppercase text-[#B8860B] font-medium">The Difference</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif font-normal tracking-[-0.02em]">
              Others Consult.<br />
              <span className="italic text-[#B8860B]">We Build.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                title: 'Operational Authority',
                desc: 'Led by a former Technogym global executive who managed wellness operations across hospitality, cruise, sports, and private clubs — not theorists, operators.',
              },
              {
                title: 'Global Scale',
                desc: 'From 144+ cruise vessels to Platinum Clubs of America to NFL training facilities — we\'ve implemented at a scale no other wellness consultancy can match.',
              },
              {
                title: 'End-to-End Delivery',
                desc: 'Strategy through operations. Concept through daily execution. We don\'t hand off a deck and walk away — we build it, staff it, and run it.',
              },
            ].map((item, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="w-12 h-12 rounded-full border border-[#B8860B]/40 flex items-center justify-center mb-5 mx-auto md:mx-0 bg-[#B8860B]/[0.05]">
                  <span className="text-sm text-[#B8860B] font-semibold">{i + 1}</span>
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">{item.title}</h3>
                <p className="text-white/55 leading-relaxed text-[15px]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 md:py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#B8860B]/[0.06] mb-6">
            <span className="text-[11px] tracking-[0.25em] uppercase text-[#B8860B] font-medium">Partnership</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6 tracking-[-0.01em]">Ready to Elevate?</h2>
          <p className="text-black/60 text-lg max-w-2xl mx-auto mb-12 leading-relaxed">
            Whether you're launching a longevity center, scaling a wellness brand, or transforming your hospitality wellness offering — we bring the experience to make it exceptional.
          </p>
          
          <a href="mailto:shawn@wellestategroup.com" className="group inline-flex items-center gap-3 px-10 py-5 bg-black text-white text-sm tracking-[0.15em] uppercase rounded-full hover:bg-black/90 transition-all shadow-[0_4px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.25)] hover:-translate-y-0.5">
            Get in Touch
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
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
                <span className="text-sm font-bold tracking-[0.04em]">WELL ESTATE GROUP</span>
              </div>
              <p className="text-sm text-black/50 leading-relaxed">
                Premium consulting for the global wellness economy.<br />
                Strategy. Implementation. Operations.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-black/40 mb-4 font-medium">Explore</p>
              <div className="space-y-2">
                <a href="/longevity/luxury" className="block text-sm text-black/60 hover:text-black transition-colors">Longevity Ventures</a>
                <a href="/gtm" className="block text-sm text-black/60 hover:text-black transition-colors">Go-To-Market Strategy</a>
                <a href="/product-intelligence" className="block text-sm text-black/60 hover:text-black transition-colors">Product Intelligence</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-black/40 mb-4 font-medium">Contact</p>
              <div className="space-y-2">
                <a href="mailto:shawn@wellestategroup.com" className="block text-sm text-black/60 hover:text-black transition-colors">shawn@wellestategroup.com</a>
                <p className="text-sm text-black/50">Houston, TX</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200/60 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-black/35">&copy; 2026 Well Estate Group. All rights reserved.</p>
            <p className="text-xs text-black/35">Private & Confidential</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
