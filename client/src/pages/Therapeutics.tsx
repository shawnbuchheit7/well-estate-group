/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Therapeutics page - Proprietary biologics and treatment modalities
 */

import { motion } from "framer-motion";
import { Dna, FlaskConical, Sparkles, Globe, DollarSign, FileText, Building2, Users, Target, TrendingUp, Shield, Handshake, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Therapeutics() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 relative">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/images/stem-cell-hero.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              PROPRIETARY THERAPEUTICS
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              The Science of Longevity
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Exclusive access to breakthrough biologics and vertically integrated manufacturing 
              capabilities that set Lumastem apart.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* The Lumastem Difference */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="grid lg:grid-cols-2 gap-16 items-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-primary text-sm tracking-wider">
                THE LUMASTEM DIFFERENCE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Physician-Led. <br />
                <span className="text-gradient">Vertically Integrated.</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground mb-8">
                Unlike competitors who rely on third-party biologics, Lumastem controls the entire 
                value chain—from cell sourcing to patient delivery. This vertical integration 
                enables superior quality, lower costs, and faster innovation.
              </p>
              <div className="space-y-4">
                {[
                  "Exclusive U.S. distributor of MUSE Cell technology",
                  "In-house GMP manufacturing capabilities",
                  "90% at-home care model with 10% annual clinic visits",
                  "AMA-aligned physician oversight at every step"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="font-body text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div variants={scaleIn} className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-3xl" />
              <img 
                src="/images/therapeutics-treatment.png" 
                alt="Lumastem Treatment Room"
                className="relative rounded-3xl border border-border shadow-2xl"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Proprietary Technology */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              BREAKTHROUGH BIOLOGICS
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Three Pillars of Regeneration
            </motion.h2>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: "MUSE Cells",
                subtitle: "Multilineage-differentiating Stress Enduring",
                icon: Dna,
                description: "Revolutionary pluripotent stem cells with superior homing ability and differentiation potential. Lumastem holds exclusive U.S. distribution rights.",
                highlights: [
                  "Non-tumorigenic safety profile",
                  "Natural tissue homing",
                  "Multi-organ regeneration potential"
                ]
              },
              {
                name: "Lumasome™ Exosomes",
                subtitle: "Proprietary Exosome Platform",
                icon: Sparkles,
                description: "Nano-sized vesicles that deliver regenerative signals to damaged tissues, enabling cell-free regenerative therapy.",
                highlights: [
                  "Proprietary isolation process",
                  "Standardized potency",
                  "Scalable manufacturing"
                ]
              },
              {
                name: "MSC Therapy",
                subtitle: "Mesenchymal Stem Cells",
                icon: FlaskConical,
                description: "Adult stem cells with proven anti-inflammatory and regenerative properties, sourced and processed in-house.",
                highlights: [
                  "Autologous & allogeneic options",
                  "GMP-certified processing",
                  "40,000+ procedures performed"
                ]
              }
            ].map((tech, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                    <tech.icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="font-display text-2xl font-medium mb-1">{tech.name}</h3>
                  <p className="font-mono text-xs text-primary mb-4">{tech.subtitle}</p>
                  <p className="font-body text-muted-foreground mb-6">{tech.description}</p>
                  <ul className="space-y-2">
                    {tech.highlights.map((highlight, i) => (
                      <li key={i} className="font-body text-sm text-muted-foreground flex gap-2">
                        <span className="text-accent">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Product Licensing Strategy */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-amber-500 text-sm tracking-wider">
                MASSIVE ADDITIONAL OPPORTUNITY
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Therapeutics Product Licensing
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                Beyond our owned centers, Lumastem's proprietary therapeutics represent a significant licensing 
                opportunity to established medical providers worldwide.
              </p>
            </motion.div>

            {/* Licensing Overview */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-card border-2 border-amber-500/30 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-amber-500/20 flex items-center justify-center">
                    <FileText className="w-7 h-7 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium">The Opportunity</h3>
                    <p className="font-mono text-xs text-amber-500">Asset-Light Revenue Stream</p>
                  </div>
                </div>
                <p className="font-body text-muted-foreground mb-6">
                  License Lumastem's proprietary therapeutics—including MUSE Cell technology, Lumasome™ exosomes, 
                  and treatment protocols—to hospitals, clinics, and medical groups worldwide without the capital 
                  investment required for physical center development.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: "$50B+", label: "Global Regenerative Medicine Market" },
                    { value: "15%+", label: "Annual Market Growth Rate" },
                    { value: "80%+", label: "Target Gross Margin" },
                    { value: "Global", label: "Addressable Market" }
                  ].map((stat, i) => (
                    <div key={i} className="bg-amber-500/10 rounded-lg p-3 text-center">
                      <span className="font-display text-xl font-bold text-amber-500">{stat.value}</span>
                      <p className="font-body text-xs text-muted-foreground mt-1">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  Licensable Assets
                </h3>
                <div className="space-y-4">
                  {[
                    {
                      title: "MUSE Cell Technology",
                      description: "Exclusive U.S. distribution rights with sublicensing capability",
                      icon: Dna
                    },
                    {
                      title: "Lumasome™ Exosome Platform",
                      description: "Proprietary isolation and standardization processes",
                      icon: Sparkles
                    },
                    {
                      title: "Treatment Protocols",
                      description: "Evidence-based protocols for orthopedics, aesthetics, and longevity",
                      icon: FileText
                    },
                    {
                      title: "Biologics Supply",
                      description: "GMP-manufactured biologics for licensee use",
                      icon: FlaskConical
                    }
                  ].map((asset, i) => (
                    <div key={i} className="flex items-start gap-3 p-3 bg-muted/30 rounded-lg">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <asset.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display font-medium">{asset.title}</h4>
                        <p className="font-body text-sm text-muted-foreground">{asset.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Target Markets */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-2">
                <Globe className="w-6 h-6 text-primary" />
                Target Licensee Markets
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    segment: "Orthopedic & Sports Medicine",
                    description: "Joint repair, cartilage regeneration, and sports injury recovery",
                    targets: ["Orthopedic surgery centers", "Sports medicine clinics", "Physical therapy networks"],
                    marketSize: "$8B+"
                  },
                  {
                    segment: "Aesthetic & Anti-Aging",
                    description: "Skin rejuvenation, hair restoration, and cosmetic applications",
                    targets: ["Medical spas", "Dermatology practices", "Plastic surgery centers"],
                    marketSize: "$12B+"
                  },
                  {
                    segment: "Pain Management",
                    description: "Chronic pain, inflammation, and degenerative conditions",
                    targets: ["Pain management clinics", "Neurology practices", "Rehabilitation centers"],
                    marketSize: "$6B+"
                  }
                ].map((market, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-display text-lg font-medium">{market.segment}</h4>
                      <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded">{market.marketSize}</span>
                    </div>
                    <p className="font-body text-sm text-muted-foreground mb-4">{market.description}</p>
                    <div className="space-y-2">
                      {market.targets.map((target, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-accent" />
                          <span className="font-body text-muted-foreground">{target}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Revenue Model */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-2">
                <DollarSign className="w-6 h-6 text-primary" />
                Licensing Revenue Model
              </h3>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 bg-muted/30 border-b border-border">
                  <p className="font-body text-muted-foreground">
                    Multi-stream revenue model combining upfront fees, recurring royalties, and product supply.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left p-5 font-body font-semibold text-muted-foreground">Revenue Stream</th>
                        <th className="text-left p-5 font-body font-semibold text-muted-foreground">Description</th>
                        <th className="text-center p-5 font-body font-semibold text-muted-foreground">Margin</th>
                        <th className="text-center p-5 font-body font-semibold text-muted-foreground">Frequency</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { stream: "Territory License Fee", description: "Upfront fee for exclusive territory rights", margin: "100%", frequency: "One-time" },
                        { stream: "Per-Treatment Royalty", description: "Percentage of each treatment performed", margin: "100%", frequency: "Per treatment" },
                        { stream: "Biologics Supply", description: "GMP-manufactured biologics at cost-plus pricing", margin: "60-70%", frequency: "Ongoing" },
                        { stream: "Training & Certification", description: "Initial and ongoing physician training fees", margin: "80%+", frequency: "Annual" },
                        { stream: "Technology Platform", description: "Access to Lumastem's clinical management software", margin: "90%+", frequency: "Monthly SaaS" }
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                          <td className="p-5 font-body font-medium">{row.stream}</td>
                          <td className="p-5 font-body text-muted-foreground">{row.description}</td>
                          <td className="p-5 text-center font-mono text-accent">{row.margin}</td>
                          <td className="p-5 text-center font-body text-muted-foreground">{row.frequency}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Geographic Priorities */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-primary" />
                Geographic Licensing Priorities
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h4 className="font-display text-lg font-medium mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary font-mono text-sm">1</span>
                    Domestic U.S. Markets
                  </h4>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    License to established medical groups in markets where Lumastem doesn't plan owned centers.
                  </p>
                  <div className="space-y-2">
                    {["Secondary metro areas (population 500K-2M)", "Regional orthopedic and sports medicine networks", "Multi-location dermatology and aesthetics groups", "Academic medical centers for research partnerships"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="font-body text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6">
                  <h4 className="font-display text-lg font-medium mb-4 flex items-center gap-2">
                    <span className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-500 font-mono text-sm">2</span>
                    International Markets
                  </h4>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    License to qualified international partners with established healthcare infrastructure.
                  </p>
                  <div className="space-y-2">
                    {["Middle East (UAE, Saudi Arabia, Bahrain) - High HNW density", "Europe (UK, Germany, Switzerland) - Established private healthcare", "Asia-Pacific (Singapore, Japan, Australia) - Growing longevity market", "Latin America (Mexico, Brazil) - Medical tourism hubs"].map((item, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                        <span className="font-body text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Licensee Requirements */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-2">
                <Shield className="w-6 h-6 text-primary" />
                Licensee Qualification Requirements
              </h3>
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    {
                      category: "Clinical Standards",
                      requirements: [
                        "Board-certified physicians on staff",
                        "Existing regenerative medicine experience",
                        "Accredited facility (AAAHC, JCI, or equivalent)",
                        "Quality management system in place"
                      ]
                    },
                    {
                      category: "Business Requirements",
                      requirements: [
                        "Minimum 3 years operational history",
                        "Demonstrated financial stability",
                        "Existing patient base (5,000+ annually)",
                        "Marketing and sales capabilities"
                      ]
                    },
                    {
                      category: "Operational Commitments",
                      requirements: [
                        "Dedicated staff for Lumastem protocols",
                        "Completion of certification training",
                        "Quarterly outcome reporting",
                        "Compliance with brand standards"
                      ]
                    }
                  ].map((section, i) => (
                    <div key={i}>
                      <h4 className="font-display font-medium mb-4 text-primary">{section.category}</h4>
                      <ul className="space-y-2">
                        {section.requirements.map((req, j) => (
                          <li key={j} className="font-body text-sm text-muted-foreground flex gap-2">
                            <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Strategic Value */}
            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-br from-amber-500/10 to-primary/10 border border-amber-500/30 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium">Strategic Value for Investors</h3>
                    <p className="font-body text-muted-foreground mt-2">
                      Therapeutics licensing represents a capital-efficient growth pathway that complements center development.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { title: "Asset-Light Growth", description: "No capital investment in physical centers required" },
                    { title: "High Margins", description: "80%+ gross margins on licensing and royalty revenue" },
                    { title: "Global Scale", description: "Reach markets where owned centers aren't feasible" },
                    { title: "Recurring Revenue", description: "Ongoing royalties and biologics supply contracts" }
                  ].map((benefit, i) => (
                    <div key={i} className="text-center">
                      <h4 className="font-display font-medium mb-2">{benefit.title}</h4>
                      <p className="font-body text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-amber-500/20">
                  <p className="font-body text-sm text-amber-200">
                    <strong className="text-amber-500">Note:</strong> A comprehensive business plan for therapeutics licensing 
                    will be developed as a separate strategic initiative following Series A close. Current projections include 
                    domestic center revenue only; licensing represents additional upside opportunity.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Cross-reference to Projections */}
            <motion.div variants={fadeInUp} className="mt-8 text-center">
              <Link href="/projections" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                View Growth Projections & Expansion Pathways →
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Manufacturing Advantage */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-primary text-sm tracking-wider">
                VERTICAL INTEGRATION
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                From Lab to Patient
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Complete control over the biologics supply chain enables superior quality, 
                lower costs, and faster innovation cycles.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Cell Sourcing", desc: "Ethical, high-quality cell acquisition" },
                  { step: "02", title: "GMP Processing", desc: "In-house manufacturing facility" },
                  { step: "03", title: "Quality Control", desc: "Rigorous testing protocols" },
                  { step: "04", title: "Patient Delivery", desc: "Physician-administered care" }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <span className="font-mono text-4xl font-bold text-gradient">{item.step}</span>
                    <h4 className="font-display text-lg font-medium mt-2 mb-1">{item.title}</h4>
                    <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
