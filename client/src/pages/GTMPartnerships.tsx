/*
 * GTM Partnerships & Channels Page - WEG Strategic Alliances
 * Design: Super premium luxury — white/cream/gold, sharp contrast, refined typography
 */

import { motion } from "framer-motion";
import { Handshake, Users, Globe, Award, ArrowRight, Building2, Dumbbell, Crown, CheckCircle2, Star } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Partnerships" },
  { id: "network", label: "Network" },
  { id: "communities", label: "Communities" },
  { id: "approach", label: "Our Approach" },
  { id: "results", label: "Results" },
];

export default function GTMPartnerships() {
  return (
    <Layout section="gtm">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          eyebrow="Strategic Alliances"
          title="Partnerships & Channels"
          description="A wealth of partnerships and awareness channels — national and global alliances that provide access to qualified, high-value audiences at scale."
          stats={[
            { value: "6", label: "Partner Categories" },
            { value: "24+", label: "Active Partners" },
            { value: "97K+", label: "Network Reach" },
            { value: "Global", label: "Coverage" },
          ]}
        />
      </div>

      {/* Partnership Network */}
      <section id="network" className="py-20 sm:py-24 bg-[#F9F9F7]">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Our Network
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              A Wealth of Partnerships
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: Globe,
                title: "Global Wellness Organizations",
                partners: ["Global Wellness Summit", "Global Wellness Institute", "International SPA Association"],
                description: "Industry-leading organizations that set the agenda for the global wellness economy.",
              },
              {
                icon: Dumbbell,
                title: "Fitness & Sports",
                partners: ["Spartan Racing", "Professional Sports Teams", "University Athletics", "National Fitness Chains"],
                description: "Performance-focused partnerships reaching athletes and fitness enthusiasts at every level.",
              },
              {
                icon: Building2,
                title: "Private Clubs & Hospitality",
                partners: ["Invited (ClubCorp)", "Golf & Country Clubs", "Destination Resorts", "City Hotels"],
                description: "Premium venues where high-net-worth individuals gather — the ideal B2B2C partner ecosystem.",
              },
              {
                icon: Crown,
                title: "Executive Networks",
                partners: ["YPO", "EO", "Vistage", "Tiger 21", "Founder Networks"],
                description: "Paid communities of high-net-worth executives and entrepreneurs — the highest-value lead source.",
              },
              {
                icon: Users,
                title: "Corporate Wellness",
                partners: ["Fortune 500 HR Departments", "Corporate Benefits Platforms", "Executive Health Programs"],
                description: "Enterprise partnerships that provide access to large employee populations seeking wellness benefits.",
              },
              {
                icon: Award,
                title: "Media & Influencers",
                partners: ["Health & Wellness Influencers", "Podcast Networks", "Industry Publications"],
                description: "Thought leadership and awareness channels that build credibility and drive organic demand.",
              },
            ].map((category, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="bg-white border border-black/[0.10] rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:border-[#C9A962]/25 transition-all duration-300 h-full"
              >
                <div className="w-11 h-11 rounded-lg bg-[#F9F9F7] border border-black/[0.06] flex items-center justify-center mb-5">
                  <category.icon className="w-5 h-5 text-[#C9A962]" />
                </div>
                <h3 className="font-display text-lg font-bold text-black mb-2 tracking-tight">{category.title}</h3>
                <p className="font-body text-sm text-black/50 mb-4 leading-relaxed">{category.description}</p>
                <div className="space-y-2 pt-4 border-t border-black/[0.06]">
                  {category.partners.map((partner, j) => (
                    <div key={j} className="flex items-center gap-2.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A962]/60" />
                      <span className="font-body text-sm text-black/60">{partner}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Paid Communities Deep Dive */}
      <section id="communities" className="py-20 sm:py-24 bg-white">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-[11px] tracking-[0.25em] uppercase">
              High-Value Channel
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Paid Communities Strategy
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/50 max-w-2xl mx-auto mt-4 leading-relaxed">
              Paid communities represent the highest-converting lead source — members are pre-qualified, 
              high-net-worth, and actively seeking premium services.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-3 gap-5">
              {[
                {
                  title: "YPO",
                  subtitle: "Young Presidents' Organization",
                  description: "35,000+ members across 142 countries. CEOs and business leaders with $9T+ in combined revenue. The gold standard for executive peer networks.",
                  stats: "35,000+ members",
                },
                {
                  title: "EO",
                  subtitle: "Entrepreneurs' Organization",
                  description: "17,000+ members in 60+ countries. Founders and entrepreneurs running businesses generating $1M+ in annual revenue.",
                  stats: "17,000+ members",
                },
                {
                  title: "Vistage",
                  subtitle: "CEO Peer Advisory",
                  description: "45,000+ members worldwide. CEOs, business owners, and key executives meeting monthly for peer advisory and executive coaching.",
                  stats: "45,000+ members",
                },
              ].map((community, i) => (
                <motion.div
                  key={i}
                  variants={scaleIn}
                  whileHover={{ y: -4 }}
                  className="bg-white border border-black/[0.10] rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:border-[#C9A962]/25 transition-all duration-300"
                >
                  <h3 className="font-display text-2xl font-bold text-[#C9A962] mb-1 tracking-tight">{community.title}</h3>
                  <p className="font-body text-xs text-black/45 mb-4">{community.subtitle}</p>
                  <p className="font-body text-sm text-black/50 leading-relaxed mb-5">{community.description}</p>
                  <div className="pt-4 border-t border-black/[0.06]">
                    <span className="font-mono text-[10px] text-[#C9A962] font-semibold tracking-[0.15em] uppercase">{community.stats}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section id="approach" className="py-20 sm:py-24 bg-[#F9F9F7]">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-[11px] tracking-[0.25em] uppercase">
              How We Partner
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Partnership Activation Framework
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
              { title: "Identify & Qualify", description: "Map the partner landscape, identify strategic fits, and qualify based on audience alignment, brand values, and growth potential." },
              { title: "Propose & Structure", description: "Develop tailored partnership proposals with clear value propositions, revenue models, and co-marketing opportunities." },
              { title: "Launch & Activate", description: "Deploy co-branded campaigns, host joint events, and integrate partner channels into the lead management system." },
              { title: "Measure & Optimize", description: "Track partner-sourced leads, conversion rates, and revenue attribution. Quarterly reviews to optimize and expand successful partnerships." },
            ].map((step, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex gap-4 items-start p-6 rounded-xl bg-white border border-black/[0.10] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#C9A962]/20 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#C9A962]/10 border border-[#C9A962]/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-sm font-bold text-[#C9A962]">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-black mb-2 tracking-tight">{step.title}</h3>
                  <p className="font-body text-sm text-black/50 leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20 sm:py-24 bg-white">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Partnership Impact
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              What Partners Gain
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
              { title: "Enhanced Member Value", description: "Partners differentiate their offering with premium wellness services — increasing member satisfaction, retention, and willingness to pay." },
              { title: "New Revenue Stream", description: "Revenue share models create a new, high-margin income stream for partners without significant capital investment or operational burden." },
              { title: "Brand Elevation", description: "Association with cutting-edge wellness and longevity positions partners as forward-thinking leaders in their respective markets." },
              { title: "Data & Insights", description: "Partners receive engagement analytics, health trend data, and member satisfaction metrics that inform their broader business strategy." },
            ].map((benefit, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex gap-4 items-start p-6 rounded-xl bg-white border border-black/[0.10] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#C9A962]/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#C9A962]/10 border border-[#C9A962]/20 flex items-center justify-center flex-shrink-0">
                  <Star className="w-4 h-4 text-[#C9A962]" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-black mb-2 tracking-tight">{benefit.title}</h3>
                  <p className="font-body text-sm text-black/50 leading-relaxed">{benefit.description}</p>
                </div>
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
            <a href="/gtm/results" className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#C9A962] text-white font-body text-sm font-semibold hover:bg-[#B8963E] shadow-[0_2px_8px_rgba(201,169,98,0.3)] hover:shadow-[0_8px_24px_rgba(201,169,98,0.35)] transition-all">
              See Our Results
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
