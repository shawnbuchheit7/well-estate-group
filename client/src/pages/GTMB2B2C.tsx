/*
 * GTM Acquisition Models Page - B2B, B2C, B2B2C
 * Based on WEG Master Deck Slides 27-33
 * Matches WEG "Cellular Renaissance" design system
 */

import { motion } from "framer-motion";
import { Users, ArrowRight, Heart, Building2, Dumbbell, Hotel, Shield, TrendingUp, Zap, CheckCircle2, UserCheck, Briefcase, ShoppingBag, ArrowRightLeft } from "lucide-react";
import Layout from "@/components/Layout";
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
              ACQUISITION MODELS
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              B2B. B2C. B2B2C.
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6"
            />
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground leading-relaxed">
              Three distinct go-to-market channels — each optimized for different customer journeys. 
              We deploy the right model for the right market, maximizing reach and conversion.
            </motion.p>
          </motion.div>

          {/* Three Model Overview Cards */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16"
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
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <model.icon className="w-10 h-10 text-primary mb-4" />
                  <h3 className="font-display text-2xl font-medium mb-1">{model.title}</h3>
                  <p className="font-body text-sm text-primary/70 mb-4">{model.subtitle}</p>
                  <p className="font-body text-muted-foreground leading-relaxed">{model.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* B2B Section */}
      <section id="b2b" className="py-20 bg-card/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              B2B — BUSINESS TO BUSINESS
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Enterprise & Institutional Sales
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Direct sales to businesses and organizations that integrate wellness solutions into their 
              operations, employee benefits, or member offerings.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
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
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <item.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* B2C Section — Seekers */}
      <section id="b2c" className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              B2C — BUSINESS TO CONSUMER
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Direct-to-Consumer Seekers
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Individuals proactively seeking predictive, preventive, and proactive healthcare solutions — 
              acquired through digital marketing, referrals, and brand awareness.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
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
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <item.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* B2B2C Section */}
      <section id="b2b2c" className="py-20 bg-card/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              B2B2C — BUSINESS TO BUSINESS TO CONSUMER
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Partnership-Driven Acquisition
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Leveraging B2B partnerships to reach end consumers — facilitating an extension of a partner's 
              wellness offerings to their existing member base.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
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
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <item.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Bridge - Synergizing Healthcare and Selfcare */}
      <section id="bridge" className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              SYNERGIZING HEALTHCARE & SELFCARE
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Building the Bridge
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
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
            <div className="grid md:grid-cols-3 gap-6 items-center">
              <motion.div variants={scaleIn} className="bg-card border border-border rounded-2xl p-8 text-center">
                <Heart className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-medium mb-2">Healthcare</h3>
                <p className="font-body text-sm text-muted-foreground">Physician-led diagnostics, regenerative medicine, executive health</p>
              </motion.div>

              <motion.div variants={fadeInUp} className="text-center">
                <div className="flex items-center justify-center gap-2">
                  <div className="h-px w-12 bg-primary/50" />
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                    <ArrowRightLeft className="w-6 h-6 text-primary" />
                  </div>
                  <div className="h-px w-12 bg-primary/50" />
                </div>
                <p className="font-display text-sm font-medium text-primary mt-3">WEG Bridge</p>
                <p className="font-body text-xs text-muted-foreground mt-1">Value-driven, not direct selling</p>
              </motion.div>

              <motion.div variants={scaleIn} className="bg-card border border-border rounded-2xl p-8 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="font-display text-2xl font-medium mb-2">Consumer</h3>
                <p className="font-body text-sm text-muted-foreground">Fitness enthusiasts, wellness seekers, health-conscious individuals</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Differentiators */}
      <section id="differentiators" className="py-20 bg-card/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              PARTNER SUPPORT
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Core Differentiators in Supporting Partners
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
                className="flex gap-4 items-start"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium mb-2">{diff.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{diff.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* The Flywheel */}
      <section id="flywheel" className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              THE ACQUISITION FLYWHEEL
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              How It All Works Together
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              B2B, B2C, and B2B2C channels reinforce each other — creating a compounding growth engine.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
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
                className="relative"
              >
                <div className="bg-card border border-border rounded-2xl p-8 h-full">
                  <span className="font-display text-5xl font-bold text-primary/20">{step.step}</span>
                  <step.icon className="w-8 h-8 text-primary mt-4 mb-4" />
                  <h3 className="font-display text-xl font-medium mb-3">{step.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{step.description}</p>
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
            <a href="/gtm/sales" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-body font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/30">
              Explore Sales & Marketing
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
