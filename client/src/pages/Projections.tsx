/**
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Projections page - Financial projections, milestones, and sensitivity analysis
 * Updated with new center rollout timeline and international expansion strategy
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Target, Shield, BarChart3, AlertTriangle, Rocket, ArrowUpRight, ArrowDownRight, Globe, Building2, Handshake, FileText, DollarSign, Percent, Users } from "lucide-react";
import Layout from "@/components/Layout";
import { PresentationMode } from "@/components/PresentationMode";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Projections() {
  // Sensitivity Analysis State
  const [membershipPrice, setMembershipPrice] = useState(29500);
  const [renewalRate, setRenewalRate] = useState(70);
  
  // Calculate sensitivity metrics
  const baseRevenue = 327; // $327M at $29,500 and 70% renewal
  const baseMemberPrice = 29500;
  const baseRenewal = 70;
  
  const priceMultiplier = membershipPrice / baseMemberPrice;
  const renewalMultiplier = 1 + ((renewalRate - baseRenewal) / 100) * 0.5; // 50% impact from renewal changes
  const adjustedRevenue = Math.round(baseRevenue * priceMultiplier * renewalMultiplier);
  const adjustedEBITDA = Math.round(adjustedRevenue * 0.345); // 34.5% margin
  const adjustedMembers = Math.round(7863 * renewalMultiplier);
  
  // Break-even calculation
  const breakEvenMembers = Math.ceil(2500000 / (membershipPrice * 0.66)); // Fixed costs / (price * margin)
  
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
              MULTI-CENTER ROLLOUT
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Growth Projections
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Conservative projections based on proven unit economics and disciplined center rollout.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Metrics Overview */}
      <section className="py-12">
        <div className="container">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="grid md:grid-cols-4 gap-6">
              {[
                { value: "$327M", label: "2031 Revenue", subtext: "10 domestic centers" },
                { value: "$113M", label: "2031 EBITDA", subtext: "34% margin" },
                { value: "7,860+", label: "Total Members", subtext: "Across all centers" },
                { value: "16x", label: "Revenue Growth", subtext: "5-year trajectory" }
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                  <span className="font-display text-3xl font-bold text-gradient">{stat.value}</span>
                  <p className="font-display font-medium mt-2">{stat.label}</p>
                  <p className="font-body text-sm text-muted-foreground">{stat.subtext}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Consolidated Financial Summary - At a Glance */}
      <section className="py-12 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <span className="font-mono text-primary text-sm tracking-wider">
                AT A GLANCE
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mt-4 mb-4">
                5-Year Financial Summary
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Key metrics across the 5-year projection period for quick investor reference.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-primary/30 rounded-2xl overflow-hidden shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary/10 to-accent/10">
                      <th className="text-left p-4 font-display font-semibold text-foreground">Metric</th>
                      <th className="text-center p-4 font-display font-semibold text-muted-foreground">2027</th>
                      <th className="text-center p-4 font-display font-semibold text-muted-foreground">2028</th>
                      <th className="text-center p-4 font-display font-semibold text-muted-foreground">2029</th>
                      <th className="text-center p-4 font-display font-semibold text-muted-foreground">2030</th>
                      <th className="text-center p-4 font-display font-semibold text-primary bg-primary/10">2031</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50 bg-card">
                      <td className="p-4 font-body">
                        <div className="flex items-center gap-2">
                          <DollarSign className="w-4 h-4 text-primary" />
                          <span className="font-medium">Total Revenue</span>
                        </div>
                      </td>
                      <td className="p-4 text-center font-mono">$20M</td>
                      <td className="p-4 text-center font-mono">$40M</td>
                      <td className="p-4 text-center font-mono">$100M</td>
                      <td className="p-4 text-center font-mono">$200M</td>
                      <td className="p-4 text-center font-mono text-primary font-bold bg-primary/5">$327M</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-body">
                        <div className="flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-emerald-400" />
                          <span className="font-medium">EBITDA</span>
                        </div>
                      </td>
                      <td className="p-4 text-center font-mono">$7M</td>
                      <td className="p-4 text-center font-mono">$14M</td>
                      <td className="p-4 text-center font-mono">$35M</td>
                      <td className="p-4 text-center font-mono">$69M</td>
                      <td className="p-4 text-center font-mono text-emerald-400 font-bold bg-primary/5">$113M</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-card">
                      <td className="p-4 font-body">
                        <div className="flex items-center gap-2">
                          <Percent className="w-4 h-4 text-amber-500" />
                          <span className="font-medium">EBITDA Margin</span>
                        </div>
                      </td>
                      <td className="p-4 text-center font-mono">34%</td>
                      <td className="p-4 text-center font-mono">34%</td>
                      <td className="p-4 text-center font-mono">34%</td>
                      <td className="p-4 text-center font-mono">34%</td>
                      <td className="p-4 text-center font-mono text-amber-500 font-bold bg-primary/5">34%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-body">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          <span className="font-medium">Total Members</span>
                        </div>
                      </td>
                      <td className="p-4 text-center font-mono">500</td>
                      <td className="p-4 text-center font-mono">977</td>
                      <td className="p-4 text-center font-mono">2,428</td>
                      <td className="p-4 text-center font-mono">4,820</td>
                      <td className="p-4 text-center font-mono text-blue-400 font-bold bg-primary/5">7,863</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-card">
                      <td className="p-4 font-body">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-purple-400" />
                          <span className="font-medium">Centers</span>
                        </div>
                      </td>
                      <td className="p-4 text-center font-mono">1</td>
                      <td className="p-4 text-center font-mono">2</td>
                      <td className="p-4 text-center font-mono">4</td>
                      <td className="p-4 text-center font-mono">7</td>
                      <td className="p-4 text-center font-mono text-purple-400 font-bold bg-primary/5">10</td>
                    </tr>
                    <tr className="bg-card">
                      <td className="p-4 font-body">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-cyan-400" />
                          <span className="font-medium">Total Staff</span>
                        </div>
                      </td>
                      <td className="p-4 text-center font-mono">25</td>
                      <td className="p-4 text-center font-mono">62</td>
                      <td className="p-4 text-center font-mono">148</td>
                      <td className="p-4 text-center font-mono">290</td>
                      <td className="p-4 text-center font-mono text-cyan-400 font-bold bg-primary/5">580</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-muted/30 border-t border-border flex items-center justify-between flex-wrap gap-4">
                <p className="font-body text-xs text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> Domestic centers only. International expansion represents additional upside.
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="text-muted-foreground">Revenue</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    <span className="text-muted-foreground">EBITDA</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                    <span className="text-muted-foreground">Members</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Revenue Projections Table */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="p-8 border-b border-border bg-muted/30">
                <h3 className="font-display text-2xl font-medium">Domestic Revenue Projections</h3>
                <p className="font-body text-muted-foreground">5-Year Financial Roadmap Based on Disciplined Center Rollout</p>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-5 font-body font-semibold text-muted-foreground">Metric</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2027</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2028</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2029</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">2030</th>
                      <th className="text-center p-5 font-body font-semibold text-gradient">2031</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { metric: "Revenue", y1: "$20M", y2: "$40M", y3: "$100M", y4: "$200M", y5: "$327M" },
                      { metric: "EBITDA", y1: "$7M", y2: "$14M", y3: "$35M", y4: "$69M", y5: "$113M" },
                      { metric: "EBITDA Margin", y1: "34%", y2: "34%", y3: "34%", y4: "34%", y5: "34%" },
                      { metric: "Members", y1: "500", y2: "977", y3: "2,428", y4: "4,820", y5: "7,863" },
                      { metric: "Centers", y1: "1", y2: "2", y3: "4", y4: "7", y5: "10" },
                      { metric: "Gross Margin", y1: "66%", y2: "66%", y3: "66%", y4: "66%", y5: "66%" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="p-5 font-body font-medium">{row.metric}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.y1}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.y2}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.y3}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.y4}</td>
                        <td className="p-5 text-center font-mono text-accent font-semibold">{row.y5}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="p-6 bg-muted/20 border-t border-border">
                <p className="font-body text-sm text-muted-foreground">
                  <strong className="text-foreground">Assumptions:</strong> Based on single-center economics of $57.5M revenue and $19.8M EBITDA at Year 5 maturity (including 50% ancillary revenue at 60% margin). 
                  500 new members/year accelerating via 40% referral rate, 85% ELITE ($29,500) / 15% CHECK ($12,500) mix, 70% ELITE renewal rate. Domestic centers only; international expansion upside not included.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sensitivity Analysis Calculator */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-primary text-sm tracking-wider">
                INTERACTIVE MODEL
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Sensitivity Analysis
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Explore how changes in membership pricing and renewal rates affect 5-year projections.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              {/* Controls */}
              <div className="p-8 border-b border-border bg-muted/30">
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Membership Price Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="font-display font-medium">ELITE Membership Price</label>
                      <span className="font-mono text-xl text-primary font-bold">${membershipPrice.toLocaleString()}</span>
                    </div>
                    <input
                      type="range"
                      min="20000"
                      max="50000"
                      step="1000"
                      value={membershipPrice}
                      onChange={(e) => setMembershipPrice(Number(e.target.value))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>$20,000</span>
                      <span className="text-primary">Base: $29,500</span>
                      <span>$50,000</span>
                    </div>
                  </div>

                  {/* Renewal Rate Slider */}
                  <div>
                    <div className="flex justify-between items-center mb-3">
                      <label className="font-display font-medium">ELITE Renewal Rate</label>
                      <span className="font-mono text-xl text-primary font-bold">{renewalRate}%</span>
                    </div>
                    <input
                      type="range"
                      min="50"
                      max="90"
                      step="5"
                      value={renewalRate}
                      onChange={(e) => setRenewalRate(Number(e.target.value))}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-primary"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>50%</span>
                      <span className="text-primary">Base: 70%</span>
                      <span>90%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Results */}
              <div className="p-8">
                <div className="grid md:grid-cols-4 gap-6 mb-8">
                  <div className="bg-muted/30 rounded-xl p-6 text-center">
                    <span className="font-mono text-3xl font-bold text-gradient">${adjustedRevenue}M</span>
                    <p className="font-body text-sm text-muted-foreground mt-2">2031 Revenue</p>
                    <p className={`font-mono text-xs mt-1 ${adjustedRevenue >= baseRevenue ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {adjustedRevenue >= baseRevenue ? '+' : ''}{adjustedRevenue - baseRevenue}M vs base
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-6 text-center">
                    <span className="font-mono text-3xl font-bold text-gradient">${adjustedEBITDA}M</span>
                    <p className="font-body text-sm text-muted-foreground mt-2">2031 EBITDA</p>
                    <p className={`font-mono text-xs mt-1 ${adjustedEBITDA >= 113 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {adjustedEBITDA >= 113 ? '+' : ''}{adjustedEBITDA - 113}M vs base
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-6 text-center">
                    <span className="font-mono text-3xl font-bold text-foreground">{adjustedMembers.toLocaleString()}</span>
                    <p className="font-body text-sm text-muted-foreground mt-2">2031 Members</p>
                    <p className={`font-mono text-xs mt-1 ${adjustedMembers >= 7863 ? 'text-emerald-400' : 'text-amber-400'}`}>
                      {adjustedMembers >= 7863 ? '+' : ''}{adjustedMembers - 7863} vs base
                    </p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-6 text-center">
                    <span className="font-mono text-3xl font-bold text-foreground">{breakEvenMembers}</span>
                    <p className="font-body text-sm text-muted-foreground mt-2">Break-Even Members</p>
                    <p className="font-mono text-xs mt-1 text-muted-foreground">Per center/year</p>
                  </div>
                </div>

                {/* Scenario Comparison */}
                <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
                  <h4 className="font-display font-medium mb-4 flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    Exit Valuation Impact
                  </h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">Conservative (15x EBITDA)</p>
                      <span className="font-mono text-2xl font-bold text-foreground">${(adjustedEBITDA * 15 / 1000).toFixed(1)}B</span>
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">Base Case (20x EBITDA)</p>
                      <span className="font-mono text-2xl font-bold text-primary">${(adjustedEBITDA * 20 / 1000).toFixed(1)}B</span>
                    </div>
                    <div>
                      <p className="font-body text-sm text-muted-foreground mb-1">Optimistic (25x EBITDA)</p>
                      <span className="font-mono text-2xl font-bold text-emerald-400">${(adjustedEBITDA * 25 / 1000).toFixed(1)}B</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-4 bg-muted/20 border-t border-border">
                <p className="font-body text-xs text-muted-foreground text-center">
                  Interactive model for illustrative purposes only. Actual results may vary based on market conditions, execution, and other factors.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Center Rollout Timeline */}
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
                EXPANSION ROADMAP
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Center Rollout Timeline
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Disciplined domestic expansion with 10 centers by 2031, plus opportunistic international growth.
              </p>
            </motion.div>

            {/* Timeline Visual */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden mb-12">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-5 font-body font-semibold text-muted-foreground">Quarter</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">New Centers</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">Total Centers</th>
                      <th className="text-left p-5 font-body font-semibold text-muted-foreground">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { quarter: "Q2 2027", new: 1, total: 1, notes: "Flagship center launch" },
                      { quarter: "Q4 2028", new: 1, total: 2, notes: "Second market entry" },
                      { quarter: "Q2 2029", new: 1, total: 3, notes: "Expansion acceleration" },
                      { quarter: "Q4 2029", new: 1, total: 4, notes: "Regional presence" },
                      { quarter: "Q2 2030", new: 2, total: 6, notes: "Dual opening capacity" },
                      { quarter: "Q4 2030", new: 1, total: 7, notes: "Continued growth" },
                      { quarter: "Q2 2031", new: 2, total: 9, notes: "Scale operations" },
                      { quarter: "Q4 2031", new: 1, total: 10, notes: "Domestic network complete" }
                    ].map((row, i) => (
                      <tr key={i} className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="p-5 font-mono font-medium">{row.quarter}</td>
                        <td className="p-5 text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-mono font-bold">
                            +{row.new}
                          </span>
                        </td>
                        <td className="p-5 text-center font-mono text-accent font-semibold">{row.total}</td>
                        <td className="p-5 font-body text-muted-foreground">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* International Expansion Strategy */}
            {/* Two Expansion Pathways */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-medium mb-4">Two Distinct Growth Pathways</h3>
                <p className="font-body text-muted-foreground max-w-3xl mx-auto">
                  Lumastem's expansion strategy encompasses two complementary pathways: center development for the full Lumastem experience, 
                  and therapeutics product licensing for broader market reach.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Center Development Pathway */}
                <div className="bg-card border-2 border-primary/30 rounded-2xl overflow-hidden">
                  <div className="p-6 bg-primary/5 border-b border-primary/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display text-xl font-medium">Center Development</h4>
                        <p className="font-mono text-xs text-primary">Full Lumastem Experience</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-body text-muted-foreground text-sm mb-6">
                      Physical Lumastem centers delivering the complete membership experience including diagnostics, 
                      physician-led care, and regenerative treatments.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Target className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-body text-sm font-medium">Domestic Expansion</span>
                          <p className="font-body text-xs text-muted-foreground">10 owned centers by 2031 in major U.S. metros</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Handshake className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-body text-sm font-medium">International Franchise</span>
                          <p className="font-body text-xs text-muted-foreground">Partner-operated centers with brand, protocols, and biologics supply</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Users className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-body text-sm font-medium">Joint Ventures</span>
                          <p className="font-body text-xs text-muted-foreground">Shared ownership with regional healthcare groups</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Therapeutics Product Licensing Pathway */}
                <div className="bg-card border-2 border-amber-500/30 rounded-2xl overflow-hidden">
                  <div className="p-6 bg-amber-500/5 border-b border-amber-500/20">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-amber-500" />
                      </div>
                      <div>
                        <h4 className="font-display text-xl font-medium">Therapeutics Product Licensing</h4>
                        <p className="font-mono text-xs text-amber-500">Massive Additional Opportunity</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="font-body text-muted-foreground text-sm mb-6">
                      License Lumastem's proprietary therapeutics—including MUSE Cell technology, biologics formulations, 
                      and treatment protocols—to established medical providers worldwide.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Target className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-body text-sm font-medium">Asset-Light Model</span>
                          <p className="font-body text-xs text-muted-foreground">No capital investment in physical centers required</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Globe className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-body text-sm font-medium">Global Reach</span>
                          <p className="font-body text-xs text-muted-foreground">License to hospitals, clinics, and medical groups worldwide</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <DollarSign className="w-4 h-4 text-amber-500 mt-1 flex-shrink-0" />
                        <div>
                          <span className="font-body text-sm font-medium">Recurring Revenue</span>
                          <p className="font-body text-xs text-muted-foreground">License fees, royalties, and biologics supply contracts</p>
                        </div>
                      </div>
                    </div>
                    {/* Business Plan Outline */}
                    <div className="mt-6 pt-6 border-t border-amber-500/20">
                      <h5 className="font-display text-sm font-medium mb-4 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-amber-500" />
                        Business Plan Development Outline
                      </h5>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-muted/30 rounded-lg p-3">
                          <h6 className="font-mono text-xs text-amber-500 mb-2">Market Analysis</h6>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Target market sizing (orthopedics, aesthetics, pain management)</li>
                            <li>• Competitive landscape analysis</li>
                            <li>• Geographic prioritization (U.S. vs international)</li>
                            <li>• Regulatory pathway by region</li>
                          </ul>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-3">
                          <h6 className="font-mono text-xs text-amber-500 mb-2">Pricing & Revenue Model</h6>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Upfront licensing fees structure</li>
                            <li>• Per-treatment royalty rates</li>
                            <li>• Biologics supply pricing (cost-plus model)</li>
                            <li>• Training and certification fees</li>
                          </ul>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-3">
                          <h6 className="font-mono text-xs text-amber-500 mb-2">Operations & Support</h6>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• Licensee onboarding process</li>
                            <li>• Training and certification requirements</li>
                            <li>• Quality assurance and compliance monitoring</li>
                            <li>• Ongoing technical support model</li>
                          </ul>
                        </div>
                        <div className="bg-muted/30 rounded-lg p-3">
                          <h6 className="font-mono text-xs text-amber-500 mb-2">Financial Projections</h6>
                          <ul className="text-xs text-muted-foreground space-y-1">
                            <li>• 5-year revenue projections by segment</li>
                            <li>• Margin analysis (licensing vs supply)</li>
                            <li>• Investment requirements</li>
                            <li>• Break-even timeline</li>
                          </ul>
                        </div>
                      </div>
                      <div className="mt-4 p-3 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                        <p className="font-body text-xs text-amber-200">
                          <strong className="text-amber-500">Status:</strong> Comprehensive business plan for therapeutics licensing 
                          will be developed as a separate strategic initiative following Series A close.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Center Development Models */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-2">
                <Building2 className="w-6 h-6 text-primary" />
                Center Development Models
              </h3>
              <p className="font-body text-muted-foreground mb-8">
                Multiple partnership models for center development, balancing capital efficiency with operational control.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    icon: Building2,
                    title: "Owned Centers",
                    description: "Fully owned and operated Lumastem centers in major U.S. markets. Maximum control over member experience and operations.",
                    benefits: ["Full revenue capture", "Brand control", "Operational excellence", "Premium market positioning"]
                  },
                  {
                    icon: Handshake,
                    title: "Franchise Model",
                    description: "Partner with established healthcare operators in target markets. Lumastem provides brand, protocols, training, and biologics supply.",
                    benefits: ["Lower capital requirements", "Local market expertise", "Faster market entry", "Recurring royalty revenue"]
                  },
                  {
                    icon: Users,
                    title: "Joint Ventures",
                    description: "Strategic partnerships with regional healthcare groups or high-net-worth investors. Shared ownership and operational responsibilities.",
                    benefits: ["Shared risk and capital", "Access to local networks", "Regulatory navigation support", "Aligned incentives"]
                  }
                ].map((model, i) => (
                  <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                      <model.icon className="w-6 h-6 text-background" />
                    </div>
                    <h4 className="font-display text-xl font-medium mb-3">{model.title}</h4>
                    <p className="font-body text-muted-foreground text-sm mb-4">{model.description}</p>
                    <ul className="space-y-2">
                      {model.benefits.map((benefit, j) => (
                        <li key={j} className="font-body text-sm text-muted-foreground flex gap-2">
                          <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-8 bg-muted/30 border border-border rounded-2xl p-6">
                <p className="font-body text-sm text-muted-foreground">
                  <strong className="text-foreground">Note:</strong> Base projections include domestic owned centers only. 
                  International franchise/JV deals and therapeutics product licensing represent additional upside opportunities. 
                  Target markets for center development include Middle East (Bahrain, UAE), Europe, and Asia-Pacific regions.
                </p>
              </div>

              {/* Geographic Expansion Map */}
              <div className="mt-12">
                <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-primary" />
                  Target Markets
                </h3>
                <p className="font-body text-muted-foreground mb-8">
                  Strategic market selection based on demographic density, wealth concentration, and healthcare infrastructure.
                </p>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Domestic Markets */}
                  <div className="bg-card border border-border rounded-2xl p-6">
                    <h4 className="font-display text-lg font-medium mb-4 flex items-center gap-2">
                      <Building2 className="w-5 h-5 text-primary" />
                      Domestic Markets (Centers 2-10)
                    </h4>
                    <div className="space-y-4">
                      {[
                        { market: "South Florida", metro: "Miami-Fort Lauderdale", hnw: "320K+", rationale: "High-net-worth density, medical tourism hub" },
                        { market: "Texas Triangle", metro: "Houston / Dallas / Austin", hnw: "450K+", rationale: "Rapid wealth growth, business-friendly" },
                        { market: "California", metro: "Los Angeles / San Francisco", hnw: "680K+", rationale: "Largest HNW population, wellness culture" },
                        { market: "Northeast", metro: "NYC Metro / Boston", hnw: "520K+", rationale: "Dense affluent population, medical excellence" },
                        { market: "Mountain West", metro: "Denver / Scottsdale", hnw: "180K+", rationale: "Active lifestyle, growing wealth" },
                        { market: "Southeast", metro: "Atlanta / Charlotte", hnw: "210K+", rationale: "Emerging wealth centers, underserved" }
                      ].map((item, i) => (
                        <div key={i} className="p-4 bg-muted/30 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-display font-medium">{item.market}</span>
                            <span className="font-mono text-xs text-primary">{item.hnw} HNW</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{item.metro}</p>
                          <p className="text-xs text-muted-foreground">{item.rationale}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* International Markets */}
                  <div className="bg-card border border-amber-500/30 rounded-2xl p-6">
                    <h4 className="font-display text-lg font-medium mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5 text-amber-500" />
                      International Opportunities
                    </h4>
                    <div className="space-y-4">
                      {[
                        { region: "Middle East", markets: "UAE, Bahrain, Saudi Arabia", model: "Franchise / JV", appeal: "Ultra-HNW concentration, medical tourism destination" },
                        { region: "Europe", markets: "UK, Switzerland, Monaco", model: "Licensing", appeal: "Established luxury wellness market, regulatory clarity" },
                        { region: "Asia-Pacific", markets: "Singapore, Hong Kong, Japan", model: "JV / Licensing", appeal: "Aging wealthy population, longevity focus" },
                        { region: "Latin America", markets: "Mexico City, São Paulo", model: "Franchise", appeal: "Growing HNW population, medical tourism" }
                      ].map((item, i) => (
                        <div key={i} className="p-4 bg-muted/30 rounded-xl">
                          <div className="flex items-center justify-between mb-2">
                            <span className="font-display font-medium">{item.region}</span>
                            <span className="font-mono text-xs text-amber-500">{item.model}</span>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{item.markets}</p>
                          <p className="text-xs text-muted-foreground">{item.appeal}</p>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 p-3 bg-amber-500/10 rounded-lg">
                      <p className="text-xs text-muted-foreground">
                        <strong className="text-amber-500">Opportunistic:</strong> International expansion not included in base projections. Represents additional upside.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Market Selection Criteria */}
                <div className="mt-8 grid md:grid-cols-4 gap-4">
                  {[
                    { criteria: "HNW Density", description: "100K+ households with $1M+ investable assets" },
                    { criteria: "Healthcare Infrastructure", description: "Access to medical professionals and facilities" },
                    { criteria: "Regulatory Environment", description: "Favorable stem cell and regenerative medicine laws" },
                    { criteria: "Competitive Landscape", description: "Limited existing premium longevity offerings" }
                  ].map((item, i) => (
                    <div key={i} className="bg-muted/30 rounded-xl p-4 text-center">
                      <span className="font-mono text-sm text-primary">{item.criteria}</span>
                      <p className="text-xs text-muted-foreground mt-2">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* HoldCo P&L - Management Company Economics */}
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
                MANAGEMENT COMPANY
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                HoldCo Economics
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Consolidated view of management fee income versus corporate overhead costs.
              </p>
            </motion.div>

            {/* HoldCo P&L Table */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left p-4 font-display font-medium">Metric</th>
                        <th className="text-right p-4 font-display font-medium">2027</th>
                        <th className="text-right p-4 font-display font-medium">2028</th>
                        <th className="text-right p-4 font-display font-medium">2029</th>
                        <th className="text-right p-4 font-display font-medium">2030</th>
                        <th className="text-right p-4 font-display font-medium">2031</th>
                      </tr>
                    </thead>
                    <tbody className="font-body">
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">Operating Centers</td>
                        <td className="p-4 text-right font-mono">1</td>
                        <td className="p-4 text-right font-mono">2</td>
                        <td className="p-4 text-right font-mono">4</td>
                        <td className="p-4 text-right font-mono">7</td>
                        <td className="p-4 text-right font-mono text-primary font-medium">10</td>
                      </tr>
                      <tr className="border-b border-border/50 bg-accent/5">
                        <td className="p-4 font-medium">Network Revenue</td>
                        <td className="p-4 text-right">$20.2M</td>
                        <td className="p-4 text-right">$40.3M</td>
                        <td className="p-4 text-right">$100.4M</td>
                        <td className="p-4 text-right">$199.8M</td>
                        <td className="p-4 text-right text-primary font-medium">$327.4M</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-4 font-medium">Management Fee Income (8%)</td>
                        <td className="p-4 text-right">$1.6M</td>
                        <td className="p-4 text-right">$3.2M</td>
                        <td className="p-4 text-right">$8.0M</td>
                        <td className="p-4 text-right">$16.0M</td>
                        <td className="p-4 text-right text-primary font-medium">$26.2M</td>
                      </tr>
                      <tr className="border-b border-border/50 text-muted-foreground">
                        <td className="p-4 font-medium">Corporate Overhead</td>
                        <td className="p-4 text-right">($2.5M)</td>
                        <td className="p-4 text-right">($3.0M)</td>
                        <td className="p-4 text-right">($4.0M)</td>
                        <td className="p-4 text-right">($5.5M)</td>
                        <td className="p-4 text-right">($7.0M)</td>
                      </tr>
                      <tr className="bg-emerald-500/10">
                        <td className="p-4 font-medium text-emerald-400">HoldCo EBITDA</td>
                        <td className="p-4 text-right font-mono text-amber-400">($0.9M)</td>
                        <td className="p-4 text-right font-mono text-emerald-400">$0.2M</td>
                        <td className="p-4 text-right font-mono text-emerald-400">$4.0M</td>
                        <td className="p-4 text-right font-mono text-emerald-400">$10.5M</td>
                        <td className="p-4 text-right font-mono text-emerald-400 font-bold">$19.2M</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Management Fee Waterfall */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="font-display text-2xl font-medium mb-6">Management Fee Allocation</h3>
              <p className="font-body text-muted-foreground mb-6">
                The 8% management fee covers centralized corporate functions that support all centers.
              </p>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { label: "Executive & Leadership", pct: "30%", amount: "$7.9M", desc: "CEO, CFO, CMO, legal" },
                  { label: "Marketing & Brand", pct: "25%", amount: "$6.6M", desc: "National campaigns, PR, digital" },
                  { label: "Technology & Systems", pct: "25%", amount: "$6.6M", desc: "Platform, IT, data analytics" },
                  { label: "Training & Compliance", pct: "20%", amount: "$5.2M", desc: "Clinical protocols, regulatory" }
                ].map((item, i) => (
                  <div key={i} className="bg-card border border-border rounded-xl p-4">
                    <div className="text-2xl font-mono font-bold text-primary mb-1">{item.pct}</div>
                    <div className="font-display font-medium text-sm mb-1">{item.label}</div>
                    <div className="font-mono text-xs text-muted-foreground mb-2">{item.amount} (2031)</div>
                    <div className="text-xs text-muted-foreground">{item.desc}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Breakeven Analysis */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-2xl font-medium mb-6">HoldCo Breakeven Analysis</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="text-4xl font-mono font-bold text-primary mb-2">$4.6M</div>
                  <div className="font-display font-medium">Mgmt Fee / Mature Center</div>
                  <div className="text-sm text-muted-foreground">8% of $57.5M revenue</div>
                </div>
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <div className="text-4xl font-mono font-bold text-primary mb-2">$2.5M</div>
                  <div className="font-display font-medium">Base Corporate Overhead</div>
                  <div className="text-sm text-muted-foreground">Fixed costs (executive, legal)</div>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-2xl p-6 text-center">
                  <div className="text-4xl font-mono font-bold text-emerald-400 mb-2">2027</div>
                  <div className="font-display font-medium text-emerald-400">HoldCo Breakeven Year</div>
                  <div className="text-sm text-muted-foreground">2 centers generating positive cash flow</div>
                </div>
              </div>
            </motion.div>

            {/* CPOM Disclaimer */}
            <motion.div variants={fadeInUp} className="mt-8">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-body text-sm text-muted-foreground">
                      <strong className="text-foreground">Regulatory Note:</strong> Management fee structure and extraction methods are subject to state Corporate Practice of Medicine (CPOM) laws and may vary by jurisdiction. 
                      Actual fee arrangements will be structured in compliance with applicable state regulations governing the corporate practice of medicine and fee-splitting prohibitions.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Sensitivity Analysis */}
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
              <span className="font-mono text-primary text-sm tracking-wider">
                SCENARIO PLANNING
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Sensitivity Analysis
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Understanding the range of outcomes based on key variable assumptions.
              </p>
            </motion.div>

            {/* Single Center Sensitivity */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Single Center Year 5 Performance
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    scenario: "Bear Case",
                    icon: ArrowDownRight,
                    color: "text-orange-400",
                    borderColor: "border-orange-400/30",
                    assumptions: ["$25,075 ELITE price (-15%)", "1,160 members (-15%)", "80% ELITE mix"],
                    revenue: "$43M",
                    ebitda: "$14M",
                    margin: "32%"
                  },
                  {
                    scenario: "Base Case",
                    icon: Target,
                    color: "text-primary",
                    borderColor: "border-primary/50",
                    assumptions: ["$29,500 ELITE / $12,500 CHECK", "1,365 members", "85% ELITE mix + 50% ancillary"],
                    revenue: "$57.5M",
                    ebitda: "$19.8M",
                    margin: "34%",
                    highlight: true
                  },
                  {
                    scenario: "Bull Case",
                    icon: ArrowUpRight,
                    color: "text-green-400",
                    borderColor: "border-green-400/30",
                    assumptions: ["$32,450 ELITE price (+10%)", "1,570 members (+15%)", "90% ELITE mix"],
                    revenue: "$72M",
                    ebitda: "$26M",
                    margin: "36%"
                  }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`bg-card border rounded-2xl p-6 ${item.highlight ? item.borderColor + ' ring-1 ring-primary/20' : 'border-border'}`}
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <item.icon className={`w-5 h-5 ${item.color}`} />
                      <span className={`font-display font-medium ${item.color}`}>{item.scenario}</span>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {item.assumptions.map((assumption, j) => (
                        <p key={j} className="font-body text-sm text-muted-foreground">• {assumption}</p>
                      ))}
                    </div>
                    
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border">
                      <div className="text-center">
                        <span className="font-mono text-lg font-bold text-foreground">{item.revenue}</span>
                        <p className="font-body text-xs text-muted-foreground">Revenue</p>
                      </div>
                      <div className="text-center">
                        <span className="font-mono text-lg font-bold text-foreground">{item.ebitda}</span>
                        <p className="font-body text-xs text-muted-foreground">EBITDA</p>
                      </div>
                      <div className="text-center">
                        <span className="font-mono text-lg font-bold text-foreground">{item.margin}</span>
                        <p className="font-body text-xs text-muted-foreground">Margin</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Company-Wide Sensitivity */}
            <motion.div variants={fadeInUp}>
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-2">
                <Rocket className="w-6 h-6 text-primary" />
                Company-Wide at Scale (10 Domestic Centers)
              </h3>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left p-5 font-body font-semibold text-muted-foreground">Scenario</th>
                        <th className="text-center p-5 font-body font-semibold text-muted-foreground">Revenue</th>
                        <th className="text-center p-5 font-body font-semibold text-muted-foreground">EBITDA</th>
                        <th className="text-center p-5 font-body font-semibold text-muted-foreground">Members</th>
                        <th className="text-center p-5 font-body font-semibold text-muted-foreground">Key Drivers</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50 hover:bg-muted/20 transition-colors">
                        <td className="p-5">
                          <div className="flex items-center gap-2">
                            <ArrowDownRight className="w-4 h-4 text-orange-400" />
                            <span className="font-body font-medium">Bear Case</span>
                          </div>
                        </td>
                        <td className="p-5 text-center font-mono text-muted-foreground">$260M</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">$85M</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">6,680</td>
                        <td className="p-5 text-center font-body text-sm text-muted-foreground">Lower pricing, slower adoption</td>
                      </tr>
                      <tr className="border-b border-border/50 bg-primary/5 hover:bg-primary/10 transition-colors">
                        <td className="p-5">
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-primary" />
                            <span className="font-body font-medium text-primary">Base Case</span>
                          </div>
                        </td>
                        <td className="p-5 text-center font-mono font-semibold text-primary">$327M</td>
                        <td className="p-5 text-center font-mono font-semibold text-primary">$113M</td>
                        <td className="p-5 text-center font-mono font-semibold text-primary">7,863</td>
                        <td className="p-5 text-center font-body text-sm text-primary">Current assumptions</td>
                      </tr>
                      <tr className="hover:bg-muted/20 transition-colors">
                        <td className="p-5">
                          <div className="flex items-center gap-2">
                            <ArrowUpRight className="w-4 h-4 text-green-400" />
                            <span className="font-body font-medium">Bull Case</span>
                          </div>
                        </td>
                        <td className="p-5 text-center font-mono text-muted-foreground">$410M</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">$148M</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">9,040</td>
                        <td className="p-5 text-center font-body text-sm text-muted-foreground">Premium pricing, faster growth</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </motion.div>

            {/* Risk Factors */}
            <motion.div variants={fadeInUp} className="mt-8 bg-card border border-border rounded-2xl p-6">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-display font-medium mb-2">Key Sensitivity Drivers</h4>
                  <div className="grid md:grid-cols-3 gap-4 font-body text-sm text-muted-foreground">
                    <div>
                      <strong className="text-foreground">Pricing Power:</strong> ELITE tier pricing has the largest impact on revenue. A 10% change in ELITE pricing affects revenue by ~$33M at scale.
                    </div>
                    <div>
                      <strong className="text-foreground">Ancillary Revenue:</strong> 50% ancillary revenue at 60% margin adds ~$19M per center, or ~$150M network-wide at maturity.
                    </div>
                    <div>
                      <strong className="text-foreground">Renewal Rate:</strong> Each 5% improvement in ELITE renewal rate adds ~$15M in recurring revenue across 10 centers.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Milestones */}
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
                EXECUTION ROADMAP
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Key Milestones
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-5 gap-6">
              {[
                { year: "2026", milestones: ["Series A close", "Flagship buildout", "MUSE Cell production setup", "Team expansion"] },
                { year: "2027", milestones: ["Q2: First center opens", "500 members", "$20M revenue", "Prove unit economics"] },
                { year: "2028", milestones: ["Q4: Second center", "977 members", "$40M revenue", "HoldCo breakeven"] },
                { year: "2029", milestones: ["2 new centers (4 total)", "2,428 members", "$100M revenue", "Scale operations"] },
                { year: "2030-31", milestones: ["6 new centers", "7,863 members", "$327M revenue", "10 center network"] }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <span className="font-display text-3xl font-bold text-gradient">{item.year}</span>
                  <ul className="mt-4 space-y-2">
                    {item.milestones.map((milestone, j) => (
                      <li key={j} className="font-body text-sm text-muted-foreground flex gap-2">
                        <Target className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        {milestone}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Exit Scenario Analysis */}
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
              <span className="font-mono text-primary text-sm tracking-wider">
                INVESTOR RETURNS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Exit Scenario Analysis
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Projected returns based on 20x EBITDA exit multiple and $50M Series A investment.
              </p>
            </motion.div>

            {/* Exit Timeline Cards */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  year: "2028",
                  ebitda: "$35M",
                  valuation: "$690M",
                  moic: "13.8x",
                  irr: "140%",
                  centers: "4 centers",
                  highlight: false
                },
                {
                  year: "2029",
                  ebitda: "$69M",
                  valuation: "$1.4B",
                  moic: "27.4x",
                  irr: "129%",
                  centers: "7 centers",
                  highlight: false
                },
                {
                  year: "2031",
                  ebitda: "$113M",
                  valuation: "$2.3B",
                  moic: "45.0x",
                  irr: "114%",
                  centers: "10 centers",
                  highlight: true
                }
              ].map((item, i) => (
                <div 
                  key={i} 
                  className={`bg-card border rounded-2xl p-6 ${item.highlight ? 'border-primary ring-1 ring-primary/20' : 'border-border'}`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-3xl font-bold text-gradient">{item.year}</span>
                    <span className="font-mono text-xs text-muted-foreground">{item.centers}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                      <span className="font-body text-muted-foreground">Network EBITDA</span>
                      <span className="font-mono font-medium">{item.ebitda}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                      <span className="font-body text-muted-foreground">Enterprise Value</span>
                      <span className="font-mono font-bold text-primary">{item.valuation}</span>
                    </div>
                    <div className="flex justify-between items-center pb-3 border-b border-border/50">
                      <span className="font-body text-muted-foreground">MOIC</span>
                      <span className="font-mono font-medium text-emerald-400">{item.moic}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="font-body text-muted-foreground">IRR</span>
                      <span className="font-mono font-bold text-emerald-400">{item.irr}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Valuation Multiple Sensitivity */}
            <motion.div variants={fadeInUp} className="mb-12">
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Valuation Sensitivity (2031 Exit)
              </h3>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left p-4 font-display font-medium">EBITDA Multiple</th>
                        <th className="text-center p-4 font-display font-medium">Enterprise Value</th>
                        <th className="text-center p-4 font-display font-medium">MOIC</th>
                        <th className="text-center p-4 font-display font-medium">IRR</th>
                      </tr>
                    </thead>
                    <tbody className="font-body">
                      {[
                        { multiple: "15x", value: "$1.7B", moic: "33.8x", irr: "102%", highlight: false },
                        { multiple: "18x", value: "$2.0B", moic: "40.5x", irr: "110%", highlight: false },
                        { multiple: "20x (Base)", value: "$2.3B", moic: "45.0x", irr: "114%", highlight: true },
                        { multiple: "22x", value: "$2.5B", moic: "49.5x", irr: "118%", highlight: false },
                        { multiple: "25x", value: "$2.8B", moic: "56.2x", irr: "124%", highlight: false }
                      ].map((row, i) => (
                        <tr key={i} className={`border-b border-border/50 ${row.highlight ? 'bg-primary/5' : ''}`}>
                          <td className={`p-4 font-medium ${row.highlight ? 'text-primary' : ''}`}>{row.multiple}</td>
                          <td className="p-4 text-center font-mono">{row.value}</td>
                          <td className="p-4 text-center font-mono text-emerald-400">{row.moic}</td>
                          <td className="p-4 text-center font-mono font-bold text-emerald-400">{row.irr}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-muted/20 border-t border-border">
                  <p className="font-body text-xs text-muted-foreground">
                    Based on 2031 Network EBITDA of $113M and $50M Series A investment. Healthcare services companies typically trade at 15-25x EBITDA.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Return Summary */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-4 gap-4">
              {[
                { icon: DollarSign, value: "$50M", label: "Series A Investment", color: "text-foreground" },
                { icon: TrendingUp, value: "$2.3B", label: "2031 Exit Value", color: "text-primary" },
                { icon: Percent, value: "45x", label: "MOIC @ 20x", color: "text-emerald-400" },
                { icon: Rocket, value: "114%", label: "5-Year IRR", color: "text-emerald-400" }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-4 text-center">
                  <item.icon className={`w-6 h-6 ${item.color} mx-auto mb-2`} />
                  <span className={`font-mono text-2xl font-bold ${item.color}`}>{item.value}</span>
                  <p className="font-body text-xs text-muted-foreground mt-1">{item.label}</p>
                </div>
              ))}
            </motion.div>

            {/* Comparable Company Analysis */}
            <motion.div variants={fadeInUp} className="mt-12">
              <h3 className="font-display text-2xl font-medium mb-6 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-primary" />
                Comparable Company Analysis
              </h3>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left p-4 font-display font-medium">Company</th>
                        <th className="text-center p-4 font-display font-medium">Sector</th>
                        <th className="text-center p-4 font-display font-medium">EV/Revenue</th>
                        <th className="text-center p-4 font-display font-medium">EV/EBITDA</th>
                        <th className="text-center p-4 font-display font-medium">Revenue Growth</th>
                      </tr>
                    </thead>
                    <tbody className="font-body">
                      {[
                        { company: "Hims & Hers (HIMS)", sector: "Telehealth/Wellness", evRev: "4.2x", evEbitda: "35x", growth: "77%" },
                        { company: "Amedisys (AMED)", sector: "Home Health", evRev: "1.8x", evEbitda: "18x", growth: "8%" },
                        { company: "LHC Group (LHCG)", sector: "Home Health", evRev: "1.5x", evEbitda: "15x", growth: "12%" },
                        { company: "Addus HomeCare (ADUS)", sector: "Home Health", evRev: "1.2x", evEbitda: "14x", growth: "15%" },
                        { company: "Option Care (OPCH)", sector: "Infusion Services", evRev: "1.1x", evEbitda: "16x", growth: "18%" },
                        { company: "BioLife Solutions (BLFS)", sector: "Cell Therapy", evRev: "5.8x", evEbitda: "N/A", growth: "25%" }
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="p-4 font-medium">{row.company}</td>
                          <td className="p-4 text-center text-muted-foreground text-sm">{row.sector}</td>
                          <td className="p-4 text-center font-mono">{row.evRev}</td>
                          <td className="p-4 text-center font-mono">{row.evEbitda}</td>
                          <td className="p-4 text-center font-mono text-emerald-400">{row.growth}</td>
                        </tr>
                      ))}
                      <tr className="bg-primary/5 font-medium">
                        <td className="p-4 text-primary">Lumastem (Implied)</td>
                        <td className="p-4 text-center text-primary text-sm">Regenerative Medicine</td>
                        <td className="p-4 text-center font-mono text-primary">7.0x</td>
                        <td className="p-4 text-center font-mono text-primary">20x</td>
                        <td className="p-4 text-center font-mono text-primary">30%+</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="p-4 bg-muted/20 border-t border-border">
                  <p className="font-body text-xs text-muted-foreground">
                    <strong className="text-foreground">Valuation Support:</strong> Lumastem's 20x EBITDA multiple is conservative relative to high-growth telehealth (HIMS at 35x) and premium to mature home health providers. 
                    The regenerative medicine positioning and 30%+ growth rate support a premium multiple within the healthcare services range.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-primary text-sm tracking-wider">
                INVESTMENT THESIS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Why Invest Now
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "16x Revenue Growth",
                  description: "From $20M in 2027 to $327M in 2031, driven by proven unit economics and disciplined center rollout."
                },
                {
                  icon: Target,
                  title: "34% Mature EBITDA Margin",
                  description: "Single-center economics deliver $19.8M annual EBITDA on $57.5M revenue at Year 5 maturity."
                },
                {
                  icon: Shield,
                  title: "International Upside",
                  description: "Opportunistic franchise, JV, and licensing deals represent additional growth beyond domestic projections."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  variants={scaleIn}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-background" />
                  </div>
                  <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Financial Disclaimers */}
      <section className="py-12 bg-muted/20">
        <div className="container">
          <div className="max-w-4xl mx-auto space-y-4">
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Accounting Basis:</strong> Financial projections presented herein are based on cash accounting principles and are intended for illustrative purposes only. 
                Actual financial statements may differ materially due to GAAP revenue recognition policies, accrual accounting treatments, and other accounting standard requirements. 
                Membership revenue recognition timing, deferred revenue treatment, and expense matching may impact reported results.
              </p>
            </div>
            <div className="bg-card border border-border rounded-xl p-5">
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                <strong className="text-foreground">Forward-Looking Statements:</strong> These projections contain forward-looking statements based on current expectations and assumptions. 
                Actual results may differ materially due to market conditions, competitive dynamics, regulatory changes, and execution risks. 
                Past performance is not indicative of future results.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Presentation Mode */}
      <PresentationMode 
        pageName="Projections"
        slides={[
          {
            id: "overview",
            title: "5-Year Financial Overview",
            content: (
              <div className="space-y-6">
                <h2 className="font-display text-4xl font-medium text-center mb-8">Growth Projections Overview</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { value: "$327M", label: "2031 Revenue", subtext: "10 domestic centers" },
                    { value: "$113M", label: "2031 EBITDA", subtext: "34% margin" },
                    { value: "7,863", label: "Total Members", subtext: "Across network" },
                    { value: "45x", label: "Target MOIC", subtext: "@ 20x EBITDA" }
                  ].map((item, i) => (
                    <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center">
                      <span className="font-mono text-4xl font-bold text-gradient">{item.value}</span>
                      <p className="font-display font-medium mt-2">{item.label}</p>
                      <p className="font-body text-sm text-muted-foreground">{item.subtext}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          },
          {
            id: "revenue-table",
            title: "Revenue Projections",
            content: (
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-medium">Domestic Revenue Projections</h2>
                <p className="text-muted-foreground">5-Year Financial Roadmap Based on Disciplined Center Rollout</p>
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left p-5 font-body font-semibold">Metric</th>
                        <th className="text-center p-5 font-body font-semibold">2027</th>
                        <th className="text-center p-5 font-body font-semibold">2028</th>
                        <th className="text-center p-5 font-body font-semibold">2029</th>
                        <th className="text-center p-5 font-body font-semibold">2030</th>
                        <th className="text-center p-5 font-body font-semibold text-primary">2031</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { metric: "Revenue", y1: "$20M", y2: "$40M", y3: "$100M", y4: "$200M", y5: "$327M" },
                        { metric: "EBITDA", y1: "$7M", y2: "$14M", y3: "$35M", y4: "$69M", y5: "$113M" },
                        { metric: "Members", y1: "500", y2: "977", y3: "2,428", y4: "4,820", y5: "7,863" },
                        { metric: "Centers", y1: "1", y2: "2", y3: "4", y4: "7", y5: "10" }
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="p-5 font-body font-medium">{row.metric}</td>
                          <td className="p-5 text-center font-mono">{row.y1}</td>
                          <td className="p-5 text-center font-mono">{row.y2}</td>
                          <td className="p-5 text-center font-mono">{row.y3}</td>
                          <td className="p-5 text-center font-mono">{row.y4}</td>
                          <td className="p-5 text-center font-mono text-primary font-bold">{row.y5}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )
          },
          {
            id: "center-rollout",
            title: "Center Rollout Timeline",
            content: (
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-medium text-center">Center Rollout Timeline</h2>
                <p className="text-muted-foreground text-center">Disciplined expansion from flagship to 10-center domestic network</p>
                <div className="bg-card border border-border rounded-2xl p-8">
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { year: "2027", centers: "1", label: "Flagship Launch" },
                      { year: "2028", centers: "2", label: "Second Market" },
                      { year: "2029", centers: "4", label: "Regional Expansion" },
                      { year: "2030-31", centers: "10", label: "Network Complete" }
                    ].map((item, i) => (
                      <div key={i} className="text-center p-6 bg-muted/30 rounded-xl">
                        <span className="font-mono text-sm text-primary">{item.year}</span>
                        <div className="font-display text-5xl font-bold my-2">{item.centers}</div>
                        <p className="font-body text-sm text-muted-foreground">{item.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )
          },
          {
            id: "investor-returns",
            title: "Investor Returns",
            content: (
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-medium text-center">Investor Return Analysis</h2>
                <p className="text-muted-foreground text-center">Based on $50M Series A investment at 20x EBITDA exit multiple</p>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { value: "$50M", label: "Series A Investment", color: "text-foreground" },
                    { value: "$2.3B", label: "2031 Exit Value", color: "text-primary" },
                    { value: "45x", label: "MOIC @ 20x", color: "text-emerald-400" },
                    { value: "114%", label: "5-Year IRR", color: "text-emerald-400" }
                  ].map((item, i) => (
                    <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center">
                      <span className={`font-mono text-4xl font-bold ${item.color}`}>{item.value}</span>
                      <p className="font-body mt-2 text-muted-foreground">{item.label}</p>
                    </div>
                  ))}
                </div>
                <div className="bg-primary/10 border border-primary/20 rounded-xl p-6 mt-6">
                  <p className="font-body text-center text-muted-foreground">
                    Healthcare services companies typically trade at 15-25x EBITDA. Conservative 20x multiple applied to $113M network EBITDA.
                  </p>
                </div>
              </div>
            )
          },
          {
            id: "key-highlights",
            title: "Investment Highlights",
            content: (
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-medium text-center">Investment Highlights</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "Proven Unit Economics", desc: "$57.5M revenue per mature center with 34% EBITDA margin" },
                    { title: "Disciplined Rollout", desc: "10 domestic centers by 2031 with clear expansion criteria" },
                    { title: "Multiple Revenue Streams", desc: "Memberships, therapeutics, licensing, and ancillary services" },
                    { title: "International Upside", desc: "Franchise and JV opportunities beyond domestic projections" }
                  ].map((item, i) => (
                    <div key={i} className="bg-card border border-border rounded-2xl p-6">
                      <h3 className="font-display text-xl font-medium mb-2 text-primary">{item.title}</h3>
                      <p className="font-body text-muted-foreground">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          }
        ]}
      />
    </Layout>
  );
}
