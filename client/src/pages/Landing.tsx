/**
 * Landing Page - Well Estate Group
 * Public front-end — no password required
 * Structure mirrors thewellestate.com but with superior authority and design
 * Sections: Hero → About → Leadership → Solutions → Proof → Differentiator → Contact
 */

import { useEffect, useState } from 'react';

export default function Landing() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full border-2 border-[#b8860b] flex items-center justify-center">
              <span className="text-sm font-serif font-bold text-[#b8860b]">W</span>
            </div>
            <span className="text-sm font-semibold tracking-[0.2em] uppercase">Well Estate Group</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-xs tracking-[0.15em] uppercase text-gray-600 hover:text-black transition-colors">About</a>
            <a href="#leadership" className="text-xs tracking-[0.15em] uppercase text-gray-600 hover:text-black transition-colors">Leadership</a>
            <a href="#solutions" className="text-xs tracking-[0.15em] uppercase text-gray-600 hover:text-black transition-colors">Solutions</a>
            <a href="#contact" className="text-xs tracking-[0.15em] uppercase text-gray-600 hover:text-black transition-colors px-5 py-2 border border-black rounded-full hover:bg-black hover:text-white transition-all">Partner with Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
        {/* Subtle background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
        
        <div className={`relative z-10 max-w-4xl mx-auto px-6 text-center transition-all duration-1000 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-8">Premium Wellness Consulting</p>
          
          <h1 className="text-5xl md:text-7xl font-serif font-normal leading-[1.1] mb-8">
            Where Wellness Meets<br />
            <em className="italic">World-Class Execution</em>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-12">
            The only consulting firm in wellness led by a former global executive who has actually 
            built and operated wellness programs for the world's most prestigious brands.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#solutions" className="px-8 py-4 bg-black text-white text-sm tracking-[0.1em] uppercase rounded-full hover:bg-gray-900 transition-colors">
              Explore Our Solutions
            </a>
            <a href="#about" className="px-8 py-4 text-sm tracking-[0.1em] uppercase border border-gray-300 rounded-full hover:border-black transition-colors">
              Our Story
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gray-300" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
            {/* Left - Image/Visual */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center px-8">
                    <div className="w-20 h-20 rounded-full border-2 border-[#b8860b] flex items-center justify-center mx-auto mb-6">
                      <span className="text-2xl font-serif font-bold text-[#b8860b]">W</span>
                    </div>
                    <p className="text-xs tracking-[0.3em] uppercase text-gray-500">Est. 2020</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mt-2">Houston, Texas</p>
                  </div>
                </div>
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 border-t-2 border-r-2 border-[#b8860b]/30 rounded-tr-2xl" />
                <div className="absolute bottom-0 left-0 w-24 h-24 border-b-2 border-l-2 border-[#b8860b]/30 rounded-bl-2xl" />
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-4">About</p>
              <h2 className="text-4xl md:text-5xl font-serif font-normal mb-8">Well Estate Group</h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Well Estate Group was founded by a former global executive at <strong className="text-black">Technogym</strong> — the world leader in premium fitness and wellness solutions — where he led the design, implementation, and operation of wellness programs for the world's most demanding brands across hospitality, cruise, real estate, private clubs, and professional sports.
                </p>
                <p>
                  Unlike firms that only advise, WEG brings direct operational experience at the highest level. We've stood on the bridge of cruise ships, walked the floors of Platinum Clubs, and built wellness centers from architectural concept through daily operations.
                </p>
                <p className="text-black font-medium">
                  That's the difference between theory and execution.
                </p>
              </div>

              <a href="#contact" className="inline-flex items-center gap-2 mt-8 text-sm tracking-[0.1em] uppercase text-[#b8860b] hover:text-black transition-colors group">
                Partner with us
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-3xl md:text-4xl font-serif mb-2">15+</p>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400">Years Leading Global Wellness</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif mb-2">144+</p>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400">Vessel Network</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif mb-2">4</p>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400">Global Regions</p>
            </div>
            <div>
              <p className="text-3xl md:text-4xl font-serif mb-2">$5.6T</p>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400">Global Wellness Economy</p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-24 md:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-4">Leadership</p>
            <h2 className="text-4xl md:text-5xl font-serif font-normal">Built by an Operator,<br />Not a Theorist</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
              <div className="grid md:grid-cols-[1fr_2fr] gap-8 items-start">
                <div className="text-center md:text-left">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 mx-auto md:mx-0 flex items-center justify-center mb-4">
                    <span className="text-3xl font-serif text-gray-500">SB</span>
                  </div>
                  <h3 className="text-xl font-serif font-medium">Shawn Buchheit</h3>
                  <p className="text-sm text-gray-500 mt-1">Founder & President</p>
                </div>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Former global executive at <strong className="text-black">Technogym</strong>, where he led wellness strategy and implementation for the world's most prestigious hospitality groups, cruise lines, luxury real estate developments, private clubs, and professional sports organizations.
                  </p>
                  <p>
                    With over 15 years at the intersection of fitness, wellness, and luxury operations, Shawn has personally designed, built, and managed wellness programs across four global regions — from 144+ cruise vessels to Platinum Clubs of America to NFL and MLB training facilities.
                  </p>
                  <p className="text-black font-medium">
                    This isn't advisory from a distance. This is leadership forged in execution.
                  </p>
                  
                  {/* Credentials */}
                  <div className="pt-6 border-t border-gray-100 mt-6">
                    <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">Key Partnerships & Associations</p>
                    <div className="flex flex-wrap gap-3">
                      {['Technogym', 'Platinum Clubs of America', 'CMAA', 'PGA', 'NFL', 'MLB', 'NCAA', 'Troon', 'OneSpaWorld'].map((name) => (
                        <span key={name} className="text-xs px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-gray-600">
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
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-4">Solutions</p>
            <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6">What We Deliver</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Institutional-grade consulting, business planning, and go-to-market strategy for companies ready to scale in the global wellness economy.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
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
              <div key={service.num} className="group p-8 md:p-10 border border-gray-200 rounded-2xl hover:border-[#b8860b]/40 hover:shadow-lg transition-all duration-300">
                <span className="text-xs tracking-[0.2em] text-[#b8860b] font-medium">{service.num}</span>
                <h3 className="text-2xl font-serif font-medium mt-3 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiator Section */}
      <section className="py-24 md:py-32 bg-black text-white">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-4">The Difference</p>
            <h2 className="text-4xl md:text-6xl font-serif font-normal">
              Others Consult.<br />
              <em className="italic text-[#b8860b]">We Build.</em>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
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
                <div className="w-10 h-10 rounded-full border border-[#b8860b]/50 flex items-center justify-center mb-4 mx-auto md:mx-0">
                  <span className="text-sm text-[#b8860b]">{i + 1}</span>
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA Section */}
      <section id="contact" className="py-24 md:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs tracking-[0.3em] uppercase text-[#b8860b] mb-4">Partnership</p>
          <h2 className="text-4xl md:text-5xl font-serif font-normal mb-6">Ready to Elevate?</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Whether you're launching a longevity center, scaling a wellness brand, or transforming your hospitality wellness offering — we bring the experience to make it exceptional.
          </p>
          
          <a href="mailto:shawn@wellestategroup.com" className="inline-flex items-center gap-3 px-10 py-5 bg-black text-white text-sm tracking-[0.15em] uppercase rounded-full hover:bg-gray-900 transition-colors">
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-3 gap-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full border-2 border-[#b8860b] flex items-center justify-center">
                  <span className="text-xs font-serif font-bold text-[#b8860b]">W</span>
                </div>
                <span className="text-sm font-semibold tracking-[0.15em] uppercase">Well Estate Group</span>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Premium consulting for the global wellness economy.<br />
                Strategy. Implementation. Operations.
              </p>
            </div>

            {/* Links */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Explore</p>
              <div className="space-y-2">
                <a href="/longevity/luxury" className="block text-sm text-gray-600 hover:text-black transition-colors">Longevity Ventures</a>
                <a href="/gtm" className="block text-sm text-gray-600 hover:text-black transition-colors">Go-To-Market Strategy</a>
              </div>
            </div>

            {/* Contact */}
            <div>
              <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-4">Contact</p>
              <div className="space-y-2">
                <a href="mailto:shawn@wellestategroup.com" className="block text-sm text-gray-600 hover:text-black transition-colors">shawn@wellestategroup.com</a>
                <p className="text-sm text-gray-500">Houston, TX</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-400">&copy; 2026 Well Estate Group. All rights reserved.</p>
            <p className="text-xs text-gray-400">Private & Confidential</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
