/*
 * GTM Acquisition Models Page - B2B, B2C, B2B2C
 * Design: Super premium luxury — white/cream/gold, sharp contrast, refined typography
 */

import { motion } from "framer-motion";
import { Users, ArrowRight, Heart, Building2, Dumbbell, Hotel, Shield, TrendingUp, Zap, CheckCircle2, UserCheck, Briefcase, ShoppingBag, ArrowRightLeft } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "b2b", label: "B2B" },
  { id: "b2c", label: "B2C" },
  { id: "b2b2c", label: "B2B2C" },
  { id: "bridge", label: "The Bridge" },
  { id: "differentiators", label: "Differentiators" },
  { id: "flywheel", label: "The Flywheel" },
];

export default function GTMB2B2C() {
  return (
    <Layout section="gtm">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          eyebrow="Acquisition Models"
          title="B2B. B2C. B2B2C."
          description="Three distinct go-to-market channels — each optimized for different customer journeys. We deploy the right model for the right market, maximizing reach and conversion."
          stats={[
            { value: "3", label: "Channels" },
            { value: "9", label: "Verticals" },
            { value: "B2B2C", label: "Primary Model" },
            { value: "∞", label: "Scale Potential" },
          ]}
        />
      </div>

      {/* Three Model Overview Cards */}
      <section className="py-16 bg-white">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {[
              {
                icon: Briefcase,
                title: "B2B",
                subtitle: "Business to Business",
                description: "Direct enterprise sales to businesses, organizations, and institutions seeking wellness and health solutions for their operations.",
              },
              {
                icon: ShoppingBag,
                title: "B2C",
                subtitle: "Business to Consumer",
                description: "Direct-to-consumer acquisition targeting individuals proactively seeking predictive, preventive, and proactive health solutions.",
              },
              {
                icon: ArrowRightLeft,
                title: "B2B2C",
                subtitle: "Business to Business to Consumer",
                description: "Leveraging B2B partnerships to reach their end consumers — extending a partner's wellness offerings to their existing member base.",
              },
            ].map((model, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="bg-white border-2 border-[#B8860B]/60 rounded-xl p-7 shadow-[0_2px_8px_rgba(184,134,11,0.05),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(184,134,11,0.12)] hover:border-[#B8860B]/60 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#F9F9F7] border-2 border-[#B8860B]/50 flex items-center justify-center mb-5">
                  <model.icon className="w-5 h-5 text-[#B8860B]" />
                </div>
                <h3 className="font-display text-2xl font-bold text-black mb-1 tracking-tight">{model.title}</h3>
                <p className="font-mono text-[10px] text-[#B8860B] font-semibold tracking-[0.15em] uppercase mb-4">{model.subtitle}</p>
                <p className="font-body text-sm text-black/65 leading-relaxed">{model.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* B2B Section */}
      <section id="b2b" className="py-20 sm:py-24 bg-[#F9F9F7]">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.25em] uppercase">
              B2B — Business to Business
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Enterprise & Institutional Sales
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/65 max-w-2xl mx-auto mt-4 leading-relaxed">
              Direct sales to businesses and organizations that integrate wellness solutions into their 
              operations, employee benefits, or member offerings.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Building2,
                title: "Corporate Wellness",
                description: "Enterprise-scale wellness programs for small, mid, and large corporations — from boutique firms to Fortune 500 companies seeking employee health solutions.",
              },
              {
                icon: Shield,
                title: "Sports & Performance",
                description: "Professional sports teams, leagues, agencies, and university athletics programs seeking cutting-edge performance, recovery, and longevity solutions.",
              },
              {
                icon: Hotel,
                title: "Hospitality & Clubs",
                description: "Hotels, resorts, country clubs, yacht clubs, and athletic clubs looking to differentiate their offerings with premium wellness amenities and programming.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="bg-white border-2 border-[#B8860B]/60 rounded-xl p-7 shadow-[0_2px_8px_rgba(184,134,11,0.05),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(184,134,11,0.12)] hover:border-[#B8860B]/60 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#F9F9F7] border-2 border-[#B8860B]/50 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#B8860B]" />
                </div>
                <h3 className="font-display text-lg font-bold text-black mb-2.5 tracking-tight">{item.title}</h3>
                <p className="font-body text-sm text-black/65 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* B2C Section — Seekers */}
      <section id="b2c" className="py-20 sm:py-24 bg-white">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.25em] uppercase">
              B2C — Business to Consumer
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Direct-to-Consumer Seekers
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/65 max-w-2xl mx-auto mt-4 leading-relaxed">
              Individuals proactively seeking predictive, preventive, and proactive healthcare solutions — 
              acquired through digital marketing, referrals, and brand awareness.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Shield,
                title: "Executive Health",
                description: "C-suite and senior executives seeking comprehensive health assessments, early detection, and personalized wellness plans.",
              },
              {
                icon: TrendingUp,
                title: "Longevity",
                description: "Health-conscious individuals investing in lifespan and healthspan optimization through cutting-edge diagnostics and interventions.",
              },
              {
                icon: Heart,
                title: "Concierge Medicine",
                description: "Affluent individuals seeking personalized, on-demand medical care with direct physician access and premium service levels.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="bg-white border-2 border-[#B8860B]/60 rounded-xl p-7 shadow-[0_2px_8px_rgba(184,134,11,0.05),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(184,134,11,0.12)] hover:border-[#B8860B]/60 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#F9F9F7] border-2 border-[#B8860B]/50 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#B8860B]" />
                </div>
                <h3 className="font-display text-lg font-bold text-black mb-2.5 tracking-tight">{item.title}</h3>
                <p className="font-body text-sm text-black/65 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* B2B2C Section */}
      <section id="b2b2c" className="py-20 sm:py-24 bg-[#F9F9F7]">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.25em] uppercase">
              B2B2C — Business to Business to Consumer
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Partnership-Driven Acquisition
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/65 max-w-2xl mx-auto mt-4 leading-relaxed">
              Leveraging B2B partnerships to reach end consumers — facilitating an extension of a partner's 
              wellness offerings to their existing member base.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Hotel,
                title: "Hotels & Resorts",
                description: "Premium hospitality brands seeking to differentiate through wellness offerings — from destination resorts to urban luxury hotels.",
              },
              {
                icon: Dumbbell,
                title: "Fitness Clubs",
                description: "National chains, regional brands, and boutique studios looking to expand their value proposition with health-focused services and products.",
              },
              {
                icon: Building2,
                title: "Private Country Clubs",
                description: "Exclusive golf, yacht, city, and athletic clubs seeking to enhance member experience with curated wellness programming.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="bg-white border-2 border-[#B8860B]/60 rounded-xl p-7 shadow-[0_2px_8px_rgba(184,134,11,0.05),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(184,134,11,0.12)] hover:border-[#B8860B]/60 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#F9F9F7] border-2 border-[#B8860B]/50 flex items-center justify-center mb-5">
                  <item.icon className="w-5 h-5 text-[#B8860B]" />
                </div>
                <h3 className="font-display text-lg font-bold text-black mb-2.5 tracking-tight">{item.title}</h3>
                <p className="font-body text-sm text-black/65 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Bridge - Synergizing Healthcare and Selfcare */}
      <section id="bridge" className="py-20 sm:py-24 bg-white">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Synergizing Healthcare & Selfcare
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Building the Bridge
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/65 max-w-2xl mx-auto mt-4 leading-relaxed">
              Fitness and wellness has largely been one direction. We facilitate multiple opportunities by extending 
              from proactive wellness and fitness regimens into early detection and prevention of disease.
            </motion.p>
          </motion.div>

          {/* Healthcare <-> Consumer Bridge Visual */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-3 gap-5 items-center">
              <motion.div variants={scaleIn} className="bg-white border-2 border-[#B8860B]/60 rounded-xl p-7 text-center shadow-[0_2px_8px_rgba(184,134,11,0.05),0_4px_16px_rgba(0,0,0,0.03)]">
                <div className="w-14 h-14 rounded-xl bg-[#F9F9F7] border-2 border-[#B8860B]/50 flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-6 h-6 text-[#B8860B]" />
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-2 tracking-tight">Healthcare</h3>
                <p className="font-body text-xs text-black/60 leading-relaxed">Physician-led diagnostics, regenerative medicine, executive health</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center py-4">
                <div className="flex items-center justify-center gap-3">
                  <div className="h-px w-10 bg-[#B8860B]/40" />
                  <div className="w-14 h-14 rounded-xl bg-[#B8860B]/10 border-2 border-[#B8860B]/55 flex items-center justify-center">
                    <ArrowRightLeft className="w-5 h-5 text-[#B8860B]" />
                  </div>
                  <div className="h-px w-10 bg-[#B8860B]/40" />
                </div>
                <p className="font-display text-sm font-bold text-black mt-3">WEG Bridge</p>
                <p className="font-body text-[11px] text-black/55 mt-1">Value-driven, not direct selling</p>
              </motion.div>

              <motion.div variants={scaleIn} className="bg-white border-2 border-[#B8860B]/60 rounded-xl p-7 text-center shadow-[0_2px_8px_rgba(184,134,11,0.05),0_4px_16px_rgba(0,0,0,0.03)]">
                <div className="w-14 h-14 rounded-xl bg-[#F9F9F7] border-2 border-[#B8860B]/50 flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-[#B8860B]" />
                </div>
                <h3 className="font-display text-xl font-bold text-black mb-2 tracking-tight">Consumer</h3>
                <p className="font-body text-xs text-black/60 leading-relaxed">Fitness enthusiasts, wellness seekers, health-conscious individuals</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Differentiators */}
      <section id="differentiators" className="py-20 sm:py-24 bg-[#F9F9F7]">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Partner Support
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Core Differentiators in Supporting Partners
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "White-Label Flexibility",
                description: "Partners can offer wellness services under their own brand, maintaining their identity while leveraging WEG's proven infrastructure and expertise.",
              },
              {
                title: "Turnkey Implementation",
                description: "From staff training to technology integration, we provide a complete deployment package that minimizes partner effort and maximizes speed to market.",
              },
              {
                title: "Revenue Share Model",
                description: "Aligned incentives through transparent revenue sharing — partners earn from every member engagement, creating a sustainable growth engine.",
              },
              {
                title: "Data-Driven Optimization",
                description: "Real-time analytics on member engagement, NPS scores, and conversion metrics allow continuous optimization of the partner experience.",
              },
              {
                title: "Dedicated Account Management",
                description: "Each partner receives a dedicated team for onboarding, ongoing support, and strategic growth planning — ensuring long-term success.",
              },
              {
                title: "Marketing & Content Support",
                description: "Co-branded marketing materials, email campaigns, social content, and event support to drive awareness and conversion within partner ecosystems.",
              },
            ].map((diff, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex gap-4 items-start p-6 rounded-xl bg-white border-2 border-[#B8860B]/60 shadow-[0_2px_8px_rgba(184,134,11,0.05)] hover:shadow-[0_8px_24px_rgba(184,134,11,0.10)] hover:border-[#B8860B]/50 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#B8860B]/10 border-2 border-[#B8860B]/50 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-black mb-2 tracking-tight">{diff.title}</h3>
                  <p className="font-body text-sm text-black/65 leading-relaxed">{diff.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Flywheel */}
      <section id="flywheel" className="py-20 sm:py-24 bg-white">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-[11px] tracking-[0.25em] uppercase">
              The Acquisition Flywheel
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              How It All Works Together
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/65 max-w-2xl mx-auto mt-4 leading-relaxed">
              B2B, B2C, and B2B2C channels reinforce each other — creating a compounding growth engine.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-5 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                step: "01",
                icon: Briefcase,
                title: "B2B Opens Doors",
                description: "Enterprise sales establish credibility and institutional relationships. Corporate wellness programs, sports teams, and hospitality partners become distribution channels.",
              },
              {
                step: "02",
                icon: UserCheck,
                title: "B2C Builds Brand",
                description: "Direct-to-consumer marketing builds brand awareness and captures high-intent seekers. Digital campaigns, referrals, and content marketing drive qualified leads.",
              },
              {
                step: "03",
                icon: Zap,
                title: "B2B2C Scales",
                description: "B2B partnerships unlock access to their consumer base. Partners' trusted relationships drive organic adoption — creating the highest-leverage acquisition channel.",
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="bg-white border-2 border-[#B8860B]/60 rounded-xl p-7 shadow-[0_2px_8px_rgba(184,134,11,0.05),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(184,134,11,0.12)] hover:border-[#B8860B]/60 transition-all duration-300"
              >
                <span className="font-display text-4xl font-bold text-[#B8860B]/20">{step.step}</span>
                <div className="w-10 h-10 rounded-lg bg-[#F9F9F7] border-2 border-[#B8860B]/50 flex items-center justify-center mt-3 mb-4">
                  <step.icon className="w-5 h-5 text-[#B8860B]" />
                </div>
                <h3 className="font-display text-lg font-bold text-black mb-2.5 tracking-tight">{step.title}</h3>
                <p className="font-body text-sm text-black/65 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="/gtm/sales" className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#B8860B] text-white font-body text-sm font-semibold hover:bg-[#B8963E] shadow-[0_2px_8px_rgba(201,169,98,0.3)] hover:shadow-[0_8px_24px_rgba(201,169,98,0.35)] transition-all">
              Explore Sales & Marketing
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
