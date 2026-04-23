/*
 * GTM Partnerships & Channels Page - WEG Strategic Alliances
 * Based on WEG Master Deck Slides 65-69, 118
 * Matches WEG "Cellular Renaissance" design system
 */

import { motion } from "framer-motion";
import { Handshake, Users, Globe, Award, ArrowRight, Building2, Dumbbell, Crown, CheckCircle2, Star } from "lucide-react";
import Layout from "@/components/Layout";
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
      <section id="hero" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              STRATEGIC ALLIANCES
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Partnerships & Channels
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6"
            />
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground leading-relaxed">
              A wealth of partnerships and awareness channels — national and global alliances 
              that provide access to qualified, high-value audiences at scale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Partnership Network */}
      <section id="network" className="py-20 bg-card/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              OUR NETWORK
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              A Wealth of Partnerships
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
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
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <category.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-display text-xl font-medium mb-3">{category.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">{category.description}</p>
                  <div className="space-y-2">
                    {category.partners.map((partner, j) => (
                      <div key={j} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        <span className="font-body text-sm">{partner}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Paid Communities Deep Dive */}
      <section id="communities" className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              HIGH-VALUE CHANNEL
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Paid Communities Strategy
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
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
            <div className="grid md:grid-cols-3 gap-8">
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
                  className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-all"
                >
                  <h3 className="font-display text-2xl font-medium text-primary mb-1">{community.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">{community.subtitle}</p>
                  <p className="font-body text-muted-foreground leading-relaxed mb-4">{community.description}</p>
                  <div className="pt-4 border-t border-border">
                    <span className="font-mono text-xs text-primary font-semibold">{community.stats}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partnership Approach */}
      <section id="approach" className="py-20 bg-card/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              HOW WE PARTNER
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Partnership Activation Framework
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
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
                className="flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="font-display text-sm font-bold text-primary">{String(i + 1).padStart(2, '0')}</span>
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium mb-2">{step.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Results */}
      <section id="results" className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              PARTNERSHIP IMPACT
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              What Partners Gain
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
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
                className="flex gap-4 items-start"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <Star className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium mb-2">{benefit.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="/gtm/results" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-body font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/30">
              See Our Results
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
