/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Opportunity page - Market opportunity and competitive landscape
 */

import { motion } from "framer-motion";
import { TrendingUp, FlaskConical, Sparkles, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Opportunity() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 relative">
        <div className="container">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              THE OPPORTUNITY
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              A $1 Trillion+ Market
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              At the crossroads of regenerative medicine, luxury wellness, and concierge care—three sectors 
              redefining modern healthcare.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Market Segments */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { 
                title: "Regenerative Medicine", 
                value: "$125B", 
                growth: "23.9% CAGR",
                year: "by 2031",
                icon: FlaskConical,
                description: "Stem cells, exosomes, and biologics driving the future of healing"
              },
              { 
                title: "Global Luxury Wellness", 
                value: "$1.2T", 
                growth: "15%+ CAGR",
                year: "by 2027",
                icon: Sparkles,
                description: "Global shift toward optimization and lifespan extension"
              },
              { 
                title: "Concierge Medicine", 
                value: "$30B+", 
                growth: "Accelerating",
                year: "U.S. Market",
                icon: Heart,
                description: "Post-COVID adoption across UHNW clients"
              }
            ].map((market, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-colors">
                  <market.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-display text-2xl font-medium mb-2">{market.title}</h3>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="font-display text-5xl font-semibold text-gradient">{market.value}</span>
                    <span className="font-mono text-sm text-muted-foreground">{market.year}</span>
                  </div>
                  <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary/10 text-primary font-mono text-sm mb-4">
                    <TrendingUp className="w-4 h-4" />
                    {market.growth}
                  </div>
                  <p className="font-body text-muted-foreground">{market.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Competitive Landscape */}
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
              COMPETITIVE ADVANTAGE
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Why Lumastem Wins
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              A fundamentally different approach to regenerative medicine—vertically integrated, 
              physician-led, and built for scale.
            </motion.p>
          </motion.div>

          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Comparison Table */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-5 font-body font-semibold text-muted-foreground w-1/4">Capability</th>
                      <th className="text-center p-5 font-body font-semibold w-1/4">
                        <span className="text-gradient">Lumastem</span>
                      </th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground w-1/4">HLI</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground w-1/4">Concierge Clinics</th>
                    </tr>
                  </thead>
                  <tbody>
                    {([
                      { 
                        capability: "Vertically Integrated Biologics", 
                        lumastem: "yes", 
                        hli: "no", 
                        concierge: "no",
                        note: "Own manufacturing"
                      },
                      { 
                        capability: "MUSE Cell Technology", 
                        lumastem: "yes", 
                        hli: "no", 
                        concierge: "no",
                        note: "Exclusive U.S. rights"
                      },
                      { 
                        capability: "Physician-Led Care Model", 
                        lumastem: "yes", 
                        hli: "yes", 
                        concierge: "partial",
                        note: "AMA-aligned"
                      },
                      { 
                        capability: "90% At-Home Care", 
                        lumastem: "yes", 
                        hli: "no", 
                        concierge: "no",
                        note: "Scalable delivery"
                      },
                      { 
                        capability: "Multi-Specialty Integration", 
                        lumastem: "yes", 
                        hli: "partial", 
                        concierge: "no",
                        note: "Ortho, spine, aesthetics"
                      },
                      { 
                        capability: "Celebrity Brand Alignment", 
                        lumastem: "yes", 
                        hli: "no", 
                        concierge: "no",
                        note: "Hemsworth, Russo, Brolin"
                      },
                      { 
                        capability: "International Expansion Ready", 
                        lumastem: "yes", 
                        hli: "partial", 
                        concierge: "no",
                        note: "Bahrain hub planned"
                      },
                      { 
                        capability: "Membership + Procedure Revenue", 
                        lumastem: "yes", 
                        hli: "yes", 
                        concierge: "partial",
                        note: "Dual revenue streams"
                      }
                    ] as const).map((row, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="p-5">
                          <span className="font-body font-medium">{row.capability}</span>
                          <span className="block font-mono text-xs text-muted-foreground mt-1">{row.note}</span>
                        </td>
                        <td className="p-5 text-center">
                          {row.lumastem === "yes" ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary">
                              ✓
                            </span>
                          ) : row.lumastem === "partial" ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent">
                              ~
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted text-muted-foreground">
                              −
                            </span>
                          )}
                        </td>
                        <td className="p-5 text-center">
                          {row.hli === "yes" ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted/50 text-muted-foreground">
                              ✓
                            </span>
                          ) : row.hli === "partial" ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted/30 text-muted-foreground">
                              ~
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted/20 text-muted-foreground/50">
                              −
                            </span>
                          )}
                        </td>
                        <td className="p-5 text-center">
                          {row.concierge === "partial" ? (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted/30 text-muted-foreground">
                              ~
                            </span>
                          ) : (
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-muted/20 text-muted-foreground/50">
                              −
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Key Differentiators */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Vertical Integration",
                  description: "Unlike competitors who source biologics externally, Lumastem owns its manufacturing—controlling quality, cost, and supply chain.",
                  highlight: "70%+ Gross Margin Potential"
                },
                {
                  title: "Scalable Care Model",
                  description: "90% at-home care with only annual in-clinic visits enables national reach without proportional facility costs.",
                  highlight: "10x Patient Capacity"
                },
                {
                  title: "Celebrity Ecosystem",
                  description: "Strategic investors like Chris Hemsworth and Joe Russo provide unmatched brand credibility and distribution channels.",
                  highlight: "100M+ Social Reach"
                }
              ].map((diff, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                  <h3 className="font-display text-xl font-medium mb-3">{diff.title}</h3>
                  <p className="font-body text-muted-foreground mb-4">{diff.description}</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/30">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span className="font-mono text-sm text-primary">{diff.highlight}</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industry vs Lumastem Comparison */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-primary text-sm tracking-wider">
                THE LUMASTEM DIFFERENCE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Setting the New Standard
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                A physician-led, integrated approach to regenerative medicine that 
                prioritizes safety, outcomes, and long-term trust.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Industry Norms */}
              <motion.div variants={fadeInUp}>
                <div className="bg-muted/30 border border-border rounded-2xl p-8 h-full">
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                      <span className="text-muted-foreground text-xl">✕</span>
                    </div>
                    <div>
                      <span className="font-mono text-xs text-muted-foreground tracking-wider">INDUSTRY NORMS</span>
                      <h3 className="font-display text-2xl font-medium">Traditional Approach</h3>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    {[
                      {
                        title: "Fragmented Services",
                        description: "No unified oversight across treatments. Patients navigate multiple providers with no coordination."
                      },
                      {
                        title: "Spa-Like Clinics",
                        description: "Transactional care focused on single treatments. No long-term relationship or comprehensive planning."
                      },
                      {
                        title: "Inconsistent Biologics",
                        description: "Biologics applied without standardized protocols. Variable quality and unpredictable outcomes."
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-destructive text-sm">✕</span>
                        </div>
                        <div>
                          <h4 className="font-display font-medium mb-1">{item.title}</h4>
                          <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Lumastem Approach */}
              <motion.div variants={fadeInUp}>
                <div className="bg-primary/10 border border-primary/30 rounded-2xl p-8 h-full relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <span className="text-primary text-xl">✓</span>
                      </div>
                      <div>
                        <span className="font-mono text-xs text-primary tracking-wider">LUMASTEM</span>
                        <h3 className="font-display text-2xl font-medium">Integrated Excellence</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-6">
                      {[
                        {
                          title: "Multi-Specialty Hub",
                          description: "Integrated care under one roof. All specialties coordinated by your Longevity Physician."
                        },
                        {
                          title: "Physician-Led Pathways",
                          description: "Programmatic care designed by physicians. Long-term relationships built on trust and outcomes."
                        },
                        {
                          title: "Proprietary Protocols",
                          description: "Biologics applied systematically across all specialties with standardized, evidence-based protocols."
                        }
                      ].map((item, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-primary text-sm">✓</span>
                          </div>
                          <div>
                            <h4 className="font-display font-medium mb-1">{item.title}</h4>
                            <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
