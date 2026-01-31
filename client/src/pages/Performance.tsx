/**
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Performance page - Single center proforma and financial metrics
 * Data source: Center Update Assumptions on Memberships Proforma Jan 2026
 * Note: Partner calculations removed as Lumastem centers are company-owned
 */

import { motion } from "framer-motion";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Building2,
  Briefcase,
  PieChart,
  BarChart3,
  Target,
  Wallet,
  UserPlus,
  ArrowUpCircle,
  Heart,
  RefreshCw,
  Package,
  ArrowRight,
  Crown,
  Check,
  Clock,
  Calendar,
  Scan,
  Zap,
  AlertTriangle,
  Lightbulb
} from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { PresentationMode } from "@/components/PresentationMode";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Performance() {
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
              SINGLE CENTER PROFORMA
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Unit Economics
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Proven financial model demonstrating strong unit economics, 
              predictable growth, and path to profitability per center.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Key Financial Highlights */}
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
                5-YEAR OUTLOOK
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Financial Highlights
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                { icon: DollarSign, value: "$57.5M", label: "Year 5 Revenue", subtext: "Per center" },
                { icon: TrendingUp, value: "66%", label: "Gross Margin", subtext: "Blended membership + ancillary" },
                { icon: Target, value: "34%", label: "Center EBITDA Margin", subtext: "True center profitability" },
                { icon: Users, value: "1,365", label: "Members", subtext: "Year 5 capacity" }
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-7 h-7 text-background" />
                  </div>
                  <span className="font-display text-3xl font-bold text-gradient">{stat.value}</span>
                  <p className="font-display font-medium mt-2">{stat.label}</p>
                  <p className="font-body text-sm text-muted-foreground">{stat.subtext}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Revenue & Profitability Table */}
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
                PROFIT & LOSS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Revenue & Profitability
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-card/50">
                      <th className="text-left font-display font-medium p-4">Metric</th>
                      <th className="text-right font-display font-medium p-4">Year 1</th>
                      <th className="text-right font-display font-medium p-4">Year 2</th>
                      <th className="text-right font-display font-medium p-4">Year 3</th>
                      <th className="text-right font-display font-medium p-4">Year 4</th>
                      <th className="text-right font-display font-medium p-4">Year 5</th>
                    </tr>
                  </thead>
                  <tbody className="font-body">
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Membership Revenue</td>
                      <td className="p-4 text-right">$13.5M</td>
                      <td className="p-4 text-right">$20.2M</td>
                      <td className="p-4 text-right">$26.7M</td>
                      <td className="p-4 text-right">$32.8M</td>
                      <td className="p-4 text-right text-primary font-medium">$38.6M</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Ancillary Revenue (50%)</td>
                      <td className="p-4 text-right">$6.7M</td>
                      <td className="p-4 text-right">$10.1M</td>
                      <td className="p-4 text-right">$13.4M</td>
                      <td className="p-4 text-right">$16.4M</td>
                      <td className="p-4 text-right text-primary font-medium">$19.3M</td>
                    </tr>
                    <tr className="border-b border-border/50 text-muted-foreground">
                      <td className="p-4 font-medium">Promotional Expense</td>
                      <td className="p-4 text-right">—</td>
                      <td className="p-4 text-right">($0.1M)</td>
                      <td className="p-4 text-right">($0.2M)</td>
                      <td className="p-4 text-right">($0.2M)</td>
                      <td className="p-4 text-right">($0.3M)</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-accent/5">
                      <td className="p-4 font-medium">Total Revenue</td>
                      <td className="p-4 text-right font-medium">$20.2M</td>
                      <td className="p-4 text-right font-medium">$30.2M</td>
                      <td className="p-4 text-right font-medium">$39.9M</td>
                      <td className="p-4 text-right font-medium">$49.0M</td>
                      <td className="p-4 text-right text-primary font-bold">$57.5M</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Gross Profit</td>
                      <td className="p-4 text-right">$13.3M</td>
                      <td className="p-4 text-right">$20.0M</td>
                      <td className="p-4 text-right">$26.5M</td>
                      <td className="p-4 text-right">$32.5M</td>
                      <td className="p-4 text-right text-primary font-medium">$38.2M</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-accent/5">
                      <td className="p-4 font-medium">Gross Margin</td>
                      <td className="p-4 text-right">66.0%</td>
                      <td className="p-4 text-right">66.3%</td>
                      <td className="p-4 text-right">66.3%</td>
                      <td className="p-4 text-right">66.3%</td>
                      <td className="p-4 text-right text-primary font-medium">66.3%</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-primary/10">
                      <td className="p-4 font-medium text-primary">Center EBITDA</td>
                      <td className="p-4 text-right font-medium">$6.9M</td>
                      <td className="p-4 text-right font-medium">$10.4M</td>
                      <td className="p-4 text-right font-medium">$13.7M</td>
                      <td className="p-4 text-right font-medium">$16.8M</td>
                      <td className="p-4 text-right text-primary font-bold">$19.8M</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-accent/5">
                      <td className="p-4 font-medium">Center EBITDA Margin</td>
                      <td className="p-4 text-right">34.0%</td>
                      <td className="p-4 text-right">34.3%</td>
                      <td className="p-4 text-right">34.3%</td>
                      <td className="p-4 text-right">34.3%</td>
                      <td className="p-4 text-right text-primary font-medium">34.3%</td>
                    </tr>
                    {/* Below the Line - Management Fee */}
                    <tr className="border-b border-border bg-muted/50">
                      <td colSpan={6} className="p-3 text-center font-mono text-xs text-muted-foreground uppercase tracking-wider">Below the Line — Corporate Allocation</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium text-muted-foreground">Management Fee (8%)</td>
                      <td className="p-4 text-right text-muted-foreground">($1.6M)</td>
                      <td className="p-4 text-right text-muted-foreground">($2.4M)</td>
                      <td className="p-4 text-right text-muted-foreground">($3.2M)</td>
                      <td className="p-4 text-right text-muted-foreground">($3.9M)</td>
                      <td className="p-4 text-right text-muted-foreground">($4.6M)</td>
                    </tr>
                    <tr className="bg-emerald-500/10">
                      <td className="p-4 font-medium text-emerald-400">Net Contribution to HoldCo</td>
                      <td className="p-4 text-right text-emerald-400 font-medium">$5.3M</td>
                      <td className="p-4 text-right text-emerald-400 font-medium">$8.0M</td>
                      <td className="p-4 text-right text-emerald-400 font-medium">$10.5M</td>
                      <td className="p-4 text-right text-emerald-400 font-medium">$12.9M</td>
                      <td className="p-4 text-right text-emerald-400 font-bold">$15.2M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Assumptions */}
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
                MODEL INPUTS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Key Assumptions
              </h2>
              <p className="font-body text-muted-foreground max-w-2xl mx-auto">
                Revenue-driving assumptions underlying the single-center proforma.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {/* Membership Assumptions */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-medium">Membership Assumptions</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "ELITE Membership Price", value: "$29,500/year" },
                    { label: "CHECK Membership Price", value: "$12,500/year" },
                    { label: "Member Mix (ELITE/CHECK)", value: "85% / 15%" },
                    { label: "ELITE Renewal Rate", value: "70%" },
                    { label: "CHECK Renewal Rate", value: "10%" },
                    { label: "Year 5 Target Members", value: "1,365" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-muted-foreground">{item.label}</span>
                      <span className="font-mono text-primary font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Growth Assumptions */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-medium">Growth Assumptions</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "Year 1 Members", value: "500" },
                    { label: "Year 2 Members", value: "727" },
                    { label: "Year 3 Members", value: "951" },
                    { label: "Year 4 Members", value: "1,165" },
                    { label: "Year 5 Members", value: "1,365" },
                    { label: "5-Year Member CAGR", value: "29%" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-muted-foreground">{item.label}</span>
                      <span className="font-mono text-primary font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Revenue Per Member */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-medium">Revenue Per Member</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "ELITE Membership/Member", value: "$29,500" },
                    { label: "CHECK Membership/Member", value: "$12,500" },
                    { label: "Ancillary Revenue", value: "50% of membership" },
                    { label: "Ancillary Margin", value: "60%" },
                    { label: "Blended Gross Margin", value: "66%" },
                    { label: "Year 5 Total Revenue", value: "$57.5M" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-muted-foreground">{item.label}</span>
                      <span className="font-mono text-primary font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capacity Assumptions */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-medium">Capacity Assumptions</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "Max Members at Maturity", value: "~1,365" },
                    { label: "ELITE Teams (Year 5)", value: "12" },
                    { label: "Members per ELITE Team", value: "120 max" },
                    { label: "Annual In-Clinic Visits", value: "1 per member" },
                    { label: "At-Home Care Delivery", value: "90%" },
                    { label: "Center Square Footage", value: "12,000-15,000 SF" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-muted-foreground">{item.label}</span>
                      <span className="font-mono text-primary font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Member Acquisition */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <UserPlus className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-medium">Member Acquisition</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "Year 1 New Members", value: "500 (all direct)" },
                    { label: "Direct Acquisition/Year", value: "300 (Y2+)" },
                    { label: "Referral Rate/Member", value: "40%" },
                    { label: "Year 5 New Members", value: "604 (accelerating)" },
                    { label: "Year 5 Referral %", value: "50%" },
                    { label: "Year 5 Referrals", value: "304" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-muted-foreground">{item.label}</span>
                      <span className="font-mono text-primary font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Upgrade & Retention */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <ArrowUpCircle className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-medium">Upgrade & Retention</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "CHECK → ELITE Upgrade Rate", value: "25%" },
                    { label: "ELITE Renewal Rate", value: "70%" },
                    { label: "CHECK Renewal Rate", value: "10%" },
                    { label: "Avg ELITE Tenure", value: "3.3 years" },
                    { label: "Avg CHECK Tenure", value: "1.1 years" },
                    { label: "Blended Retention Rate", value: "61%" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-muted-foreground">{item.label}</span>
                      <span className="font-mono text-primary font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Member Lifetime Value */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Heart className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl font-medium">Member Lifetime Value</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  {[
                    { label: "ELITE LTV", value: "$97,350" },
                    { label: "CHECK LTV", value: "$13,750" },
                    { label: "Blended LTV", value: "$84,810" },
                    { label: "Blended LTV/CAC Ratio", value: "51:1" },
                    { label: "Payback Period (Blended)", value: "23 days" },
                    { label: "5-Year Revenue/Member", value: "$31,400" }
                  ].map((item, i) => (
                    <div key={i} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-muted-foreground">{item.label}</span>
                      <span className="font-mono text-primary font-medium">{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Referral Economics */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <Users className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium">Referral Economics</h3>
                      <p className="text-sm text-muted-foreground">CAC comparison by acquisition channel</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                      <span className="text-emerald-400 font-mono text-2xl font-bold">$1,000</span>
                      <p className="text-sm text-muted-foreground mt-1">Referral CAC</p>
                      <p className="text-xs text-emerald-400/70">$500 referrer + $500 new member</p>
                    </div>
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                      <span className="text-amber-400 font-mono text-2xl font-bold">$2,500</span>
                      <p className="text-sm text-muted-foreground mt-1">Direct CAC</p>
                      <p className="text-xs text-amber-400/70">60% of new members</p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: "Blended CAC", value: "$1,900", highlight: true },
                      { label: "Referral Members/Year", value: "200" },
                      { label: "Direct Members/Year", value: "300" },
                      { label: "Annual Referral Savings", value: "$300K" },
                      { label: "Referral LTV/CAC", value: "97:1" },
                      { label: "Direct LTV/CAC", value: "39:1" }
                    ].map((item, i) => (
                      <div key={i} className={`flex justify-between items-center py-2 border-b border-border/50 last:border-0 ${item.highlight ? 'bg-primary/5 -mx-2 px-2 rounded' : ''}`}>
                        <span className="font-body text-muted-foreground">{item.label}</span>
                        <span className={`font-mono font-medium ${item.highlight ? 'text-primary' : 'text-foreground'}`}>{item.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Payback Period Visualization */}
            <motion.div variants={fadeInUp} className="mt-12">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium">Payback Period by Channel</h3>
                      <p className="text-sm text-muted-foreground">Months to recover customer acquisition cost</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  {/* Visual Payback Timeline */}
                  <div className="space-y-6">
                    {/* Referral Channel */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-body text-sm">Member Referrals</span>
                        <span className="font-mono text-emerald-400 font-bold">0.4 months</span>
                      </div>
                      <div className="h-8 bg-muted/30 rounded-full overflow-hidden relative">
                        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-emerald-500 to-emerald-400 rounded-full flex items-center justify-end pr-3" style={{ width: '8%' }}>
                          <span className="text-xs font-bold text-emerald-950">$1K</span>
                        </div>
                        <div className="absolute inset-y-0 right-4 flex items-center">
                          <span className="text-xs text-muted-foreground">~12 days payback ($500 + $500 credits)</span>
                        </div>
                      </div>
                    </div>

                    {/* Direct Acquisition */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-body text-sm">Direct Acquisition</span>
                        <span className="font-mono text-amber-400 font-bold">1.0 month</span>
                      </div>
                      <div className="h-8 bg-muted/30 rounded-full overflow-hidden relative">
                        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-amber-500 to-amber-400 rounded-full flex items-center justify-end pr-3" style={{ width: '17%' }}>
                          <span className="text-xs font-bold text-amber-950">$2.5K</span>
                        </div>
                        <div className="absolute inset-y-0 right-4 flex items-center">
                          <span className="text-xs text-muted-foreground">$29.5K annual × 1mo = $2.5K CAC recovered</span>
                        </div>
                      </div>
                    </div>

                    {/* Blended */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-body text-sm font-medium">Blended (All Channels)</span>
                        <span className="font-mono text-primary font-bold">0.8 months</span>
                      </div>
                      <div className="h-8 bg-muted/30 rounded-full overflow-hidden relative">
                        <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-end pr-3" style={{ width: '13%' }}>
                          <span className="text-xs font-bold text-primary-foreground">$1.9K</span>
                        </div>
                        <div className="absolute inset-y-0 right-4 flex items-center">
                          <span className="text-xs text-muted-foreground">~23 days payback (40% referral + 60% direct)</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Timeline Scale */}
                  <div className="mt-6 pt-4 border-t border-border/50">
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0 mo</span>
                      <span>1.5 mo</span>
                      <span>3 mo</span>
                      <span>4.5 mo</span>
                      <span>6 mo</span>
                    </div>
                  </div>

                  {/* Key Insight */}
                  <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-body text-sm">
                          <strong className="text-foreground">Key Insight:</strong> With $1,000 referral CAC ($500 credits each) and $2,500 direct CAC, 
                          blended payback is just <span className="text-primary font-medium">23 days</span>. 
                          Every ELITE member generates <span className="text-primary font-medium">$27,600 net contribution</span> in Year 1 alone.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Referral Velocity by Year */}
            <motion.div variants={fadeInUp} className="mt-12">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-emerald-400" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium">Referral Velocity by Year</h3>
                      <p className="text-sm text-muted-foreground">How referral rate builds as member base matures</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-mono text-sm text-muted-foreground">Metric</th>
                          <th className="text-center py-3 px-4 font-mono text-sm text-muted-foreground">Year 1</th>
                          <th className="text-center py-3 px-4 font-mono text-sm text-muted-foreground">Year 2</th>
                          <th className="text-center py-3 px-4 font-mono text-sm text-muted-foreground">Year 3</th>
                          <th className="text-center py-3 px-4 font-mono text-sm text-muted-foreground">Year 4</th>
                          <th className="text-center py-3 px-4 font-mono text-sm text-primary font-medium bg-primary/5">Year 5</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { metric: "Starting Members", y1: "0", y2: "500", y3: "727", y4: "951", y5: "1,165" },
                          { metric: "Referral Rate", y1: "0%", y2: "30%", y3: "38%", y4: "42%", y5: "45%" },
                          { metric: "Referral Members", y1: "0", y2: "91", y3: "143", y4: "186", y5: "200" },
                          { metric: "Direct Acquisition", y1: "500", y2: "386", y3: "367", y4: "400", y5: "400" },
                          { metric: "Total New Members", y1: "500", y2: "477", y3: "510", y4: "586", y5: "600" },
                          { metric: "Referral % of New", y1: "0%", y2: "19%", y3: "28%", y4: "32%", y5: "33%" }
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-border/50 last:border-0">
                            <td className="py-3 px-4 font-body text-foreground">{row.metric}</td>
                            <td className="py-3 px-4 text-center font-mono text-muted-foreground">{row.y1}</td>
                            <td className="py-3 px-4 text-center font-mono text-muted-foreground">{row.y2}</td>
                            <td className="py-3 px-4 text-center font-mono text-muted-foreground">{row.y3}</td>
                            <td className="py-3 px-4 text-center font-mono text-muted-foreground">{row.y4}</td>
                            <td className="py-3 px-4 text-center font-mono text-primary font-medium bg-primary/5">{row.y5}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  {/* Visual Progress Bars */}
                  <div className="mt-6 space-y-3">
                    <p className="font-body text-sm text-muted-foreground mb-4">Referral Rate Progression</p>
                    {[
                      { year: "Year 1", rate: 0, color: "bg-muted" },
                      { year: "Year 2", rate: 30, color: "bg-emerald-500/50" },
                      { year: "Year 3", rate: 38, color: "bg-emerald-500/60" },
                      { year: "Year 4", rate: 42, color: "bg-emerald-500/80" },
                      { year: "Year 5", rate: 45, color: "bg-emerald-500" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <span className="font-mono text-xs text-muted-foreground w-16">{item.year}</span>
                        <div className="flex-1 h-6 bg-muted/30 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${item.color} rounded-full transition-all duration-500`} 
                            style={{ width: `${item.rate}%` }}
                          />
                        </div>
                        <span className="font-mono text-sm font-medium w-12 text-right">{item.rate}%</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <ArrowUpCircle className="w-5 h-5 text-emerald-400 mt-0.5" />
                      <div>
                        <p className="font-body text-sm">
                          <strong className="text-foreground">Referral Flywheel:</strong> Year 1 has 0% referrals (new center, no existing members). 
                          As the member base grows and experiences results, referral rate accelerates to <span className="text-emerald-400 font-medium">45% by Year 5</span>, 
                          reducing blended CAC and improving unit economics over time.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Sensitivity Analysis */}
            <motion.div variants={fadeInUp} className="mt-12">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium">Sensitivity Analysis</h3>
                      <p className="text-sm text-muted-foreground">Impact of ELITE renewal rate on key metrics</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left py-3 px-4 font-mono text-sm text-muted-foreground">Metric</th>
                          <th className="text-center py-3 px-4 font-mono text-sm text-muted-foreground">65% Renewal</th>
                          <th className="text-center py-3 px-4 font-mono text-sm text-primary font-medium bg-primary/5">70% Renewal (Base)</th>
                          <th className="text-center py-3 px-4 font-mono text-sm text-muted-foreground">75% Renewal</th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          { metric: "ELITE LTV", low: "$82,250", base: "$97,350", high: "$117,700" },
                          { metric: "Avg ELITE Tenure", low: "2.9 years", base: "3.3 years", high: "4.0 years" },
                          { metric: "Year 5 ELITE Members", low: "1,198", base: "1,265", high: "1,332" },
                          { metric: "Year 5 Revenue", low: "$54.5M", base: "$57.5M", high: "$60.5M" },
                          { metric: "Year 5 EBITDA", low: "$18.7M", base: "$19.8M", high: "$20.9M" },
                          { metric: "5-Year Cumulative Revenue", low: "$187M", base: "$197M", high: "$207M" },
                          { metric: "LTV/CAC Ratio", low: "43:1", base: "51:1", high: "62:1" }
                        ].map((row, i) => (
                          <tr key={i} className="border-b border-border/50 last:border-0">
                            <td className="py-3 px-4 font-body text-foreground">{row.metric}</td>
                            <td className="py-3 px-4 text-center font-mono text-amber-400">{row.low}</td>
                            <td className="py-3 px-4 text-center font-mono text-primary font-medium bg-primary/5">{row.base}</td>
                            <td className="py-3 px-4 text-center font-mono text-emerald-400">{row.high}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-6 grid md:grid-cols-3 gap-4">
                    <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-4 text-center">
                      <span className="text-amber-400 font-mono text-2xl font-bold">-$10M</span>
                      <p className="text-sm text-muted-foreground mt-1">5-Year Revenue Impact</p>
                      <p className="text-xs text-amber-400/70">at 65% renewal</p>
                    </div>
                    <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center">
                      <span className="text-primary font-mono text-2xl font-bold">$197M</span>
                      <p className="text-sm text-muted-foreground mt-1">Base Case Revenue</p>
                      <p className="text-xs text-primary/70">at 70% renewal</p>
                    </div>
                    <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 text-center">
                      <span className="text-emerald-400 font-mono text-2xl font-bold">+$10M</span>
                      <p className="text-sm text-muted-foreground mt-1">5-Year Revenue Upside</p>
                      <p className="text-xs text-emerald-400/70">at 75% renewal</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Membership Model */}
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
                MEMBERSHIP TIERS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Tiered Membership Model
              </h2>
              <Link href="/memberships" className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors group">
                <span className="font-body text-sm">View detailed membership benefits</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
              {[
                {
                  tier: "CHECK",
                  price: "$12,500",
                  mix: "15%",
                  renewal: "10%",
                  description: "Comprehensive health assessment with advanced diagnostics, baseline biomarkers, and personalized wellness roadmap"
                },
                {
                  tier: "ELITE",
                  price: "$29,500",
                  mix: "85%",
                  renewal: "70%",
                  description: "Premium tier with full biologic treatments, MUSE cell therapy, concierge care, and ongoing optimization protocols",
                  highlight: true
                }
              ].map((tier, i) => (
                <div 
                  key={i} 
                  className={`bg-card border rounded-2xl p-6 ${
                    tier.highlight 
                      ? 'border-primary shadow-lg shadow-primary/10' 
                      : 'border-border'
                  }`}
                >
                  {tier.highlight && (
                    <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded mb-4 inline-block">
                      PRIMARY TIER
                    </span>
                  )}
                  <h3 className="font-display text-2xl font-bold mb-2">{tier.tier}</h3>
                  <p className="font-display text-3xl font-bold text-gradient mb-4">{tier.price}</p>
                  <p className="font-body text-sm text-muted-foreground mb-4">{tier.description}</p>
                  <div className="space-y-2 pt-4 border-t border-border">
                    <div className="flex justify-between">
                      <span className="font-body text-sm text-muted-foreground">Member Mix</span>
                      <span className="font-mono text-sm text-primary">{tier.mix}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-body text-sm text-muted-foreground">Renewal Rate</span>
                      <span className="font-mono text-sm text-primary">{tier.renewal}</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Member Growth Table */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="p-6 border-b border-border">
                <h3 className="font-display text-xl font-medium">Member Growth Trajectory</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-card/50">
                      <th className="text-left font-display font-medium p-4">Tier</th>
                      <th className="text-right font-display font-medium p-4">Year 1</th>
                      <th className="text-right font-display font-medium p-4">Year 2</th>
                      <th className="text-right font-display font-medium p-4">Year 3</th>
                      <th className="text-right font-display font-medium p-4">Year 4</th>
                      <th className="text-right font-display font-medium p-4">Year 5</th>
                    </tr>
                  </thead>
                  <tbody className="font-body">
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">ELITE</td>
                      <td className="p-4 text-right">425</td>
                      <td className="p-4 text-right">655</td>
                      <td className="p-4 text-right">871</td>
                      <td className="p-4 text-right">1,074</td>
                      <td className="p-4 text-right">1,265</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">CHECK</td>
                      <td className="p-4 text-right">75</td>
                      <td className="p-4 text-right">71</td>
                      <td className="p-4 text-right">80</td>
                      <td className="p-4 text-right">91</td>
                      <td className="p-4 text-right">100</td>
                    </tr>
                    <tr className="border-b border-border/50 bg-accent/10">
                      <td className="p-4 font-medium">New Members</td>
                      <td className="p-4 text-right">500</td>
                      <td className="p-4 text-right">422</td>
                      <td className="p-4 text-right">486</td>
                      <td className="p-4 text-right">547</td>
                      <td className="p-4 text-right">604</td>
                    </tr>
                    <tr className="border-b border-border/50 text-muted-foreground">
                      <td className="p-4 font-medium">— From Referrals</td>
                      <td className="p-4 text-right">0</td>
                      <td className="p-4 text-right">122 (29%)</td>
                      <td className="p-4 text-right">186 (38%)</td>
                      <td className="p-4 text-right">247 (45%)</td>
                      <td className="p-4 text-right">304 (50%)</td>
                    </tr>
                    <tr className="bg-primary/10">
                      <td className="p-4 font-medium text-primary">Total Members</td>
                      <td className="p-4 text-right font-medium">500</td>
                      <td className="p-4 text-right font-medium">727</td>
                      <td className="p-4 text-right font-medium">951</td>
                      <td className="p-4 text-right font-medium">1,165</td>
                      <td className="p-4 text-right font-medium text-primary">1,365</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Member Cohort Analysis */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden mt-8">
              <div className="p-6 border-b border-border">
                <h3 className="font-display text-xl font-medium">Member Cohort Analysis</h3>
                <p className="text-sm text-muted-foreground mt-1">How Year 1 members compound through renewals alongside new acquisitions</p>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-card/50">
                      <th className="text-left font-display font-medium p-4">Cohort</th>
                      <th className="text-right font-display font-medium p-4">Year 1</th>
                      <th className="text-right font-display font-medium p-4">Year 2</th>
                      <th className="text-right font-display font-medium p-4">Year 3</th>
                      <th className="text-right font-display font-medium p-4">Year 4</th>
                      <th className="text-right font-display font-medium p-4">Year 5</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm">
                    <tr className="border-b border-border/50 bg-primary/5">
                      <td className="p-4 font-medium">Y1 Cohort (New)</td>
                      <td className="p-4 text-right text-primary font-medium">425</td>
                      <td className="p-4 text-right">297</td>
                      <td className="p-4 text-right">208</td>
                      <td className="p-4 text-right">146</td>
                      <td className="p-4 text-right">102</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Y2 Cohort (New)</td>
                      <td className="p-4 text-right text-muted-foreground">—</td>
                      <td className="p-4 text-right text-primary font-medium">425</td>
                      <td className="p-4 text-right">297</td>
                      <td className="p-4 text-right">208</td>
                      <td className="p-4 text-right">146</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Y3 Cohort (New)</td>
                      <td className="p-4 text-right text-muted-foreground">—</td>
                      <td className="p-4 text-right text-muted-foreground">—</td>
                      <td className="p-4 text-right text-primary font-medium">425</td>
                      <td className="p-4 text-right">297</td>
                      <td className="p-4 text-right">208</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Y4 Cohort (New)</td>
                      <td className="p-4 text-right text-muted-foreground">—</td>
                      <td className="p-4 text-right text-muted-foreground">—</td>
                      <td className="p-4 text-right text-muted-foreground">—</td>
                      <td className="p-4 text-right text-primary font-medium">425</td>
                      <td className="p-4 text-right">297</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Y5 Cohort (New)</td>
                      <td className="p-4 text-right text-muted-foreground">—</td>
                      <td className="p-4 text-right text-muted-foreground">—</td>
                      <td className="p-4 text-right text-muted-foreground">—</td>
                      <td className="p-4 text-right text-muted-foreground">—</td>
                      <td className="p-4 text-right text-primary font-medium">425</td>
                    </tr>
                    <tr className="bg-accent/10">
                      <td className="p-4 font-medium">Total ELITE</td>
                      <td className="p-4 text-right font-bold">425</td>
                      <td className="p-4 text-right font-bold">722</td>
                      <td className="p-4 text-right font-bold">930</td>
                      <td className="p-4 text-right font-bold">1,076</td>
                      <td className="p-4 text-right font-bold text-primary">1,178</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-muted/20 border-t border-border">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <span className="font-mono text-lg font-bold text-primary">70%</span>
                    <p className="text-xs text-muted-foreground">Annual Retention</p>
                  </div>
                  <div>
                    <span className="font-mono text-lg font-bold text-emerald-400">425</span>
                    <p className="text-xs text-muted-foreground">New ELITE/Year</p>
                  </div>
                  <div>
                    <span className="font-mono text-lg font-bold text-amber-400">753</span>
                    <p className="text-xs text-muted-foreground">Y5 Retained Members</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Revenue Breakdown */}
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
                REVENUE MIX
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Revenue Breakdown by Source
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-card/50">
                      <th className="text-left font-display font-medium p-4">Revenue Source</th>
                      <th className="text-right font-display font-medium p-4">Year 1</th>
                      <th className="text-right font-display font-medium p-4">Year 2</th>
                      <th className="text-right font-display font-medium p-4">Year 3</th>
                      <th className="text-right font-display font-medium p-4">Year 4</th>
                      <th className="text-right font-display font-medium p-4">Year 5</th>
                    </tr>
                  </thead>
                  <tbody className="font-body">
                    <tr className="border-b border-border/50 bg-accent/5">
                      <td className="p-4 font-medium">ELITE Memberships</td>
                      <td className="p-4 text-right">$12.5M</td>
                      <td className="p-4 text-right">$19.3M</td>
                      <td className="p-4 text-right">$25.7M</td>
                      <td className="p-4 text-right">$31.7M</td>
                      <td className="p-4 text-right text-primary font-medium">$37.3M</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">CHECK Memberships</td>
                      <td className="p-4 text-right">$0.9M</td>
                      <td className="p-4 text-right">$0.9M</td>
                      <td className="p-4 text-right">$1.0M</td>
                      <td className="p-4 text-right">$1.1M</td>
                      <td className="p-4 text-right">$1.3M</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Ancillary Services (50%)</td>
                      <td className="p-4 text-right">$6.7M</td>
                      <td className="p-4 text-right">$10.1M</td>
                      <td className="p-4 text-right">$13.4M</td>
                      <td className="p-4 text-right">$16.4M</td>
                      <td className="p-4 text-right">$19.3M</td>
                    </tr>
                    <tr className="border-b border-border/50 text-muted-foreground">
                      <td className="p-4 font-medium">Promotional Expense</td>
                      <td className="p-4 text-right">—</td>
                      <td className="p-4 text-right">($0.1M)</td>
                      <td className="p-4 text-right">($0.2M)</td>
                      <td className="p-4 text-right">($0.2M)</td>
                      <td className="p-4 text-right">($0.3M)</td>
                    </tr>
                    <tr className="bg-accent/10">
                      <td className="p-4 font-medium">Total Revenue</td>
                      <td className="p-4 text-right font-medium">$20.2M</td>
                      <td className="p-4 text-right font-medium">$30.2M</td>
                      <td className="p-4 text-right font-medium">$39.9M</td>
                      <td className="p-4 text-right font-medium">$49.0M</td>
                      <td className="p-4 text-right font-bold text-primary">$57.5M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Revenue Insight */}
            <motion.div variants={fadeInUp} className="mt-8 grid md:grid-cols-3 gap-6">
              {[
                { label: "Membership Revenue", value: "67%", description: "ELITE + CHECK memberships" },
                { label: "Ancillary Revenue", value: "33%", description: "50% of membership at 60% margin" },
                { label: "Revenue CAGR", value: "30%", description: "compound annual growth" }
              ].map((item, i) => (
                <div key={i} className="bg-card/50 border border-border rounded-xl p-6 text-center">
                  <span className="font-display text-3xl font-bold text-gradient">{item.value}</span>
                  <p className="font-display font-medium mt-2">{item.label}</p>
                  <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </motion.div>

            {/* Ancillary Revenue Breakdown */}
            <motion.div variants={fadeInUp} className="mt-12">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Package className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium">Ancillary Revenue Breakdown</h3>
                      <p className="text-sm text-muted-foreground">50% of membership revenue at 60% contribution margin</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                    {[
                      { category: "Peptide Therapies", pct: "35%", amount: "$6.8M", items: "BPC-157, TB-500, GHK-Cu, Thymosin Alpha-1" },
                      { category: "Nutraceuticals & Supplements", pct: "25%", amount: "$4.8M", items: "NAD+, NMN, Resveratrol, custom formulations" },
                      { category: "Advanced Treatments", pct: "25%", amount: "$4.8M", items: "Exosome therapy, PRP, hyperbaric oxygen" },
                      { category: "At-Home Services", pct: "15%", amount: "$2.9M", items: "IV therapy, mobile diagnostics, concierge care" }
                    ].map((item, i) => (
                      <div key={i} className="bg-accent/5 border border-border/50 rounded-xl p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-mono text-2xl font-bold text-primary">{item.pct}</span>
                          <span className="font-mono text-sm text-muted-foreground">{item.amount}</span>
                        </div>
                        <h4 className="font-display font-medium text-sm mb-1">{item.category}</h4>
                        <p className="text-xs text-muted-foreground">{item.items}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-primary/5 border border-primary/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-body text-sm">
                          <strong className="text-foreground">Year 5 Ancillary Revenue:</strong> $19.3M at 60% contribution margin = <span className="text-primary font-medium">$11.6M gross profit</span>. 
                          Ancillary services leverage existing member relationships with minimal incremental acquisition cost.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CAPEX & Investment */}
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
                CAPITAL REQUIREMENTS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Center Investment
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {/* Professional Fees & Construction */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Construction & Professional Fees
                </h3>
                <div className="space-y-3">
                  {[
                    { item: "Construction Cost", amount: "$4,550,000" },
                    { item: "Architect & Engineering", amount: "$295,750" },
                    { item: "CM Services", amount: "$69,876" },
                    { item: "FFE Management", amount: "$16,040" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0">
                      <span className="font-body text-muted-foreground">{row.item}</span>
                      <span className="font-mono text-sm">{row.amount}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <span className="font-display font-medium">Subtotal</span>
                    <span className="font-mono text-primary font-medium">$4,931,666</span>
                  </div>
                </div>
              </div>

              {/* Other Project Costs */}
              <div className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Other Project Costs
                </h3>
                <div className="space-y-3">
                  {[
                    { item: "Imaging Down Payment", amount: "$1,500,000" },
                    { item: "Furniture", amount: "$300,000" },
                    { item: "Medical Equipment", amount: "$223,784" },
                    { item: "Audio Visual", amount: "$121,000" },
                    { item: "IT / Network", amount: "$110,000" },
                    { item: "Security", amount: "$22,000" },
                    { item: "Synexis Air Purification", amount: "$21,863" },
                    { item: "Signage", amount: "$17,700" },
                    { item: "Ancillary Equipment", amount: "$16,500" },
                    { item: "Shielding Report", amount: "$4,400" },
                    { item: "Locksmith", amount: "$1,100" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center pb-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-sm text-muted-foreground">{row.item}</span>
                      <span className="font-mono text-xs">{row.amount}</span>
                    </div>
                  ))}
                  <div className="flex justify-between items-center pt-3 border-t border-border">
                    <span className="font-display font-medium">Subtotal</span>
                    <span className="font-mono text-primary font-medium">$2,338,347</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Medical Equipment Detail */}
            <motion.div variants={fadeInUp} className="mt-8 bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-primary" />
                Medical Equipment (CAPEX)
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { equipment: "X-ray", cost: "$119,784" },
                  { equipment: "DEXA Scanner", cost: "$55,000" },
                  { equipment: "Ultrasound", cost: "$49,000" },
                  { equipment: "Total", cost: "$223,784", highlight: true }
                ].map((item, i) => (
                  <div 
                    key={i} 
                    className={`text-center p-4 rounded-xl ${
                      item.highlight ? 'bg-primary/10 border border-primary/30' : 'bg-card/50'
                    }`}
                  >
                    <p className="font-body text-sm text-muted-foreground mb-1">{item.equipment}</p>
                    <p className={`font-mono ${item.highlight ? 'text-primary font-bold' : ''}`}>{item.cost}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Imaging Costs */}
            <motion.div variants={fadeInUp} className="mt-8 bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-primary" />
                Imaging Equipment (Operating Lease)
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left font-display font-medium p-3">Equipment</th>
                      <th className="text-right font-display font-medium p-3">Year 1</th>
                      <th className="text-right font-display font-medium p-3">Year 2+</th>
                    </tr>
                  </thead>
                  <tbody className="font-body">
                    <tr className="border-b border-border/50">
                      <td className="p-3">CT Scanner</td>
                      <td className="p-3 text-right font-mono text-sm">$186,210</td>
                      <td className="p-3 text-right font-mono text-sm">$306,420</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-3">MRI</td>
                      <td className="p-3 text-right font-mono text-sm">$174,468</td>
                      <td className="p-3 text-right font-mono text-sm">$282,936</td>
                    </tr>
                    <tr className="bg-accent/5">
                      <td className="p-3 font-medium">Total Annual</td>
                      <td className="p-3 text-right font-mono text-primary font-medium">$360,678</td>
                      <td className="p-3 text-right font-mono text-primary font-medium">$589,356</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Total Investment Summary */}
            <motion.div variants={fadeInUp} className="mt-8 bg-gradient-to-br from-accent/10 to-primary/10 border border-primary/30 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-medium mb-6 text-center">Total Center Investment</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { label: "Total CAPEX", value: "$7,270,012" },
                  { label: "Working Capital", value: "$1,250,000" },
                  { label: "Total Investment", value: "$8,520,012", highlight: true }
                ].map((item, i) => (
                  <div key={i} className={`text-center p-6 rounded-xl ${item.highlight ? 'bg-card border border-primary' : 'bg-card/50'}`}>
                    <p className="font-body text-muted-foreground mb-2">{item.label}</p>
                    <p className={`font-display text-2xl font-bold ${item.highlight ? 'text-gradient' : ''}`}>{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Staffing Plan */}
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
                OPERATIONS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Staffing Plan
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {/* Headcount Table */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h3 className="font-display text-xl font-medium flex items-center gap-2">
                    <Users className="w-5 h-5 text-primary" />
                    Headcount by Role
                  </h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border bg-card/50">
                        <th className="text-left font-display font-medium p-3 text-sm">Role</th>
                        <th className="text-right font-display font-medium p-3 text-sm">Y1</th>
                        <th className="text-right font-display font-medium p-3 text-sm">Y2</th>
                        <th className="text-right font-display font-medium p-3 text-sm">Y5</th>
                      </tr>
                    </thead>
                    <tbody className="font-body text-sm">
                      {[
                        { role: "Medical Director", y1: 1, y2: 1, y5: 1 },
                        { role: "Physician", y1: 4, y2: 7, y5: 12 },
                        { role: "Nurse Practitioner", y1: 1, y2: 1, y5: 1 },
                        { role: "Center Director", y1: 1, y2: 1, y5: 1 },
                        { role: "Radiology Tech", y1: 2, y2: 2, y5: 3 },
                        { role: "Registered Nurse", y1: 3, y2: 3, y5: 3 },
                        { role: "Care Coordinator", y1: 8, y2: 15, y5: 25 },
                        { role: "Medical Assistant", y1: 4, y2: 7, y5: 12 }
                      ].map((row, i) => (
                        <tr key={i} className="border-b border-border/50">
                          <td className="p-3">{row.role}</td>
                          <td className="p-3 text-right">{row.y1}</td>
                          <td className="p-3 text-right">{row.y2}</td>
                          <td className="p-3 text-right">{row.y5}</td>
                        </tr>
                      ))}
                      <tr className="bg-accent/5">
                        <td className="p-3 font-medium">Total</td>
                        <td className="p-3 text-right font-medium">25</td>
                        <td className="p-3 text-right font-medium">37</td>
                        <td className="p-3 text-right font-medium text-primary">58</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Salary Structure */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border">
                  <h3 className="font-display text-xl font-medium flex items-center gap-2">
                    <Wallet className="w-5 h-5 text-primary" />
                    Salary Structure
                  </h3>
                </div>
                <div className="p-6 space-y-3">
                  {[
                    { role: "Medical Director", salary: "$350,000" },
                    { role: "Physician", salary: "$250,000" },
                    { role: "Center Director", salary: "$175,000" },
                    { role: "Nurse Practitioner", salary: "$125,000" },
                    { role: "Radiology Tech", salary: "$115,000" },
                    { role: "Registered Nurse", salary: "$80,000" },
                    { role: "Care Coordinator", salary: "$60,000" },
                    { role: "Medical Assistant", salary: "$55,000" }
                  ].map((row, i) => (
                    <div key={i} className="flex justify-between items-center pb-3 border-b border-border/50 last:border-0">
                      <span className="font-body text-sm">{row.role}</span>
                      <span className="font-mono text-sm text-primary">{row.salary}</span>
                    </div>
                  ))}
                  <div className="pt-4 mt-4 border-t border-border">
                    <p className="font-body text-sm text-muted-foreground">
                      Benefits: <span className="text-primary font-medium">20%</span> of base salary
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Personnel Cost Summary */}
            <motion.div variants={fadeInUp} className="mt-8 bg-card border border-border rounded-2xl p-6">
              <h3 className="font-display text-xl font-medium mb-6 flex items-center gap-2">
                <UserPlus className="w-5 h-5 text-primary" />
                Total Personnel Costs (Including Benefits)
              </h3>
              <div className="grid grid-cols-5 gap-4">
                {[
                  { year: "Year 1", cost: "$4.3M" },
                  { year: "Year 2", cost: "$6.4M" },
                  { year: "Year 3", cost: "$8.0M" },
                  { year: "Year 4", cost: "$9.1M" },
                  { year: "Year 5", cost: "$10.0M" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-card/50 rounded-xl">
                    <p className="font-body text-xs text-muted-foreground mb-1">{item.year}</p>
                    <p className="font-mono text-primary font-medium">{item.cost}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Diagnostic Capacity Analysis */}
      <section id="diagnostic-capacity" className="py-20 scroll-mt-20">
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
                CAPACITY ANALYSIS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Diagnostic Suite Capacity
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
                Each center features 6-7 diagnostic suites. Every membership requires an annual visit 
                to complete comprehensive diagnostics, making imaging capacity the rate-limiting factor.
              </p>
            </motion.div>

            {/* Key Constraint */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="bg-amber-500/10 border border-amber-500/30 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-6 h-6 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium text-amber-500 mb-2">Rate-Limiting Factors</h3>
                    <p className="font-body text-muted-foreground">
                      Member capacity is constrained by two primary factors: <strong className="text-foreground">hours of operation</strong> and 
                      <strong className="text-foreground"> scan time in MRI and CT machines</strong>. Each diagnostic visit takes approximately 
                      <strong className="text-foreground"> 4 hours</strong> to complete the full imaging protocol.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Capacity Calculation Cards */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                {
                  scenario: "Standard Hours",
                  hours: "7:00 AM - 5:30 PM",
                  days: "Monday - Friday",
                  calculation: "7 diagnostics/day × 5 days × 50 weeks",
                  capacity: "1,750",
                  highlight: false
                },
                {
                  scenario: "Extended Hours",
                  hours: "7:00 AM - 9:00 PM",
                  days: "Monday - Friday",
                  calculation: "9 diagnostics/day × 5 days × 50 weeks",
                  capacity: "2,250",
                  highlight: false
                },
                {
                  scenario: "Full Weekend",
                  hours: "+ Saturday (9) + Sunday (7)",
                  days: "7 Days/Week",
                  calculation: "61 diagnostics/week × 50 weeks",
                  capacity: "3,050",
                  highlight: true
                }
              ].map((item, i) => (
                <div key={i} className={`rounded-2xl p-6 ${item.highlight ? 'bg-gradient-to-br from-primary/20 to-accent/20 border-2 border-primary/50' : 'bg-card border border-border'}`}>
                  <div className="flex items-center gap-2 mb-4">
                    <Clock className={`w-5 h-5 ${item.highlight ? 'text-primary' : 'text-muted-foreground'}`} />
                    <h3 className="font-display text-lg font-medium">{item.scenario}</h3>
                  </div>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="font-body text-sm text-muted-foreground">{item.days}</span>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground">{item.hours}</p>
                  </div>
                  <div className="pt-4 border-t border-border/50">
                    <p className="font-mono text-xs text-muted-foreground mb-2">{item.calculation}</p>
                    <div className="flex items-baseline gap-2">
                      <span className={`font-display text-4xl font-bold ${item.highlight ? 'text-primary' : 'text-foreground'}`}>{item.capacity}</span>
                      <span className="font-body text-sm text-muted-foreground">members/year</span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Detailed Math Breakdown */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden mb-12">
              <div className="p-6 border-b border-border bg-muted/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Scan className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-medium">Capacity Calculation Breakdown</h3>
                    <p className="text-sm text-muted-foreground">Based on 4-hour diagnostic protocol per member</p>
                  </div>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-5 font-body font-semibold text-muted-foreground">Operating Scenario</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">Daily Hours</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">Diagnostics/Day</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">Days/Week</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">Weekly Total</th>
                      <th className="text-center p-5 font-body font-semibold text-muted-foreground">Annual Capacity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { scenario: "Standard (M-F)", hours: "10.5 hrs", daily: "7", days: "5", weekly: "35", annual: "1,750" },
                      { scenario: "Extended (M-F)", hours: "14 hrs", daily: "9", days: "5", weekly: "45", annual: "2,250" },
                      { scenario: "+ Saturday", hours: "14 hrs", daily: "9", days: "6", weekly: "54", annual: "2,700" },
                      { scenario: "+ Sunday (to 5:30)", hours: "10.5 hrs", daily: "7", days: "7", weekly: "61", annual: "3,050", highlight: true }
                    ].map((row, i) => (
                      <tr key={i} className={`border-b border-border/50 ${row.highlight ? 'bg-primary/5' : 'hover:bg-muted/20'} transition-colors`}>
                        <td className={`p-5 font-body ${row.highlight ? 'font-medium text-primary' : ''}`}>{row.scenario}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.hours}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.daily}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.days}</td>
                        <td className="p-5 text-center font-mono text-muted-foreground">{row.weekly}</td>
                        <td className={`p-5 text-center font-mono font-medium ${row.highlight ? 'text-primary' : 'text-foreground'}`}>{row.annual}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="p-4 bg-muted/20 border-t border-border">
                <p className="font-body text-sm text-muted-foreground text-center">
                  <strong className="text-foreground">Note:</strong> 50 operating weeks per year (accounting for holidays and maintenance)
                </p>
              </div>
            </motion.div>

            {/* Future Opportunities */}
            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-br from-emerald-500/10 to-primary/10 border border-emerald-500/30 rounded-2xl p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium">Future Capacity Opportunities</h3>
                    <p className="font-body text-muted-foreground mt-2">
                      Strategic investments to increase member capacity and improve the member experience.
                    </p>
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Equipment Procurement",
                      description: "Procuring additional MRI and CT imaging equipment to run parallel diagnostic sessions",
                      icon: Scan,
                      impact: "Up to 2x capacity"
                    },
                    {
                      title: "Compression Protocols",
                      description: "Implementing new imaging compression protocols to reduce scan times without sacrificing quality",
                      icon: Zap,
                      impact: "20-30% faster"
                    },
                    {
                      title: "AI-Assisted Imaging",
                      description: "Deploying AI algorithms to accelerate image acquisition and reconstruction",
                      icon: Lightbulb,
                      impact: "30-50% faster"
                    },
                    {
                      title: "Workflow Optimization",
                      description: "Streamlined member flow and preparation protocols to minimize downtime between sessions",
                      icon: Clock,
                      impact: "15-20% efficiency"
                    }
                  ].map((item, i) => (
                    <div key={i} className="bg-card/50 backdrop-blur border border-border rounded-xl p-5">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-emerald-400" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <h4 className="font-display font-medium">{item.title}</h4>
                            <span className="font-mono text-xs text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">{item.impact}</span>
                          </div>
                          <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Takeaways */}
      <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <span className="font-mono text-primary text-sm tracking-wider">
                INVESTMENT THESIS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-8">
                Key Takeaways
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Proven Unit Economics",
                  description: "66% gross margin and 34% EBITDA margin by Year 5 demonstrates strong profitability at the center level."
                },
                {
                  title: "Predictable Growth",
                  description: "Membership model with 70% ELITE renewal rate creates recurring revenue and predictable cash flows."
                },
                {
                  title: "Scalable Model",
                  description: "$8.5M total investment per center with clear path to $19.8M Center EBITDA ($15.2M net after 8% management fee) within 5 years."
                },
                {
                  title: "Premium Positioning",
                  description: "ELITE tier ($29,500) drives 93% of membership revenue, validating premium market positioning."
                }
              ].map((item, i) => (
                <div key={i} className="bg-card/50 backdrop-blur border border-border rounded-2xl p-6 text-left">
                  <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cross-Reference to Projections */}
      <section className="py-12">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <Link href="/projections">
                <div className="bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border border-primary/30 rounded-2xl p-8 hover:border-primary/50 transition-all cursor-pointer group">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <TrendingUp className="w-7 h-7 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-medium mb-1">Multi-Center Growth Projections</h3>
                        <p className="font-body text-muted-foreground">
                          See how these single-center economics scale across 10 domestic centers by 2031, 
                          projecting $327M revenue and $113M EBITDA.
                        </p>
                      </div>
                    </div>
                    <div className="hidden md:flex items-center gap-2 text-primary group-hover:translate-x-1 transition-transform">
                      <span className="font-mono text-sm">View Projections</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-border/50 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { label: "2031 Revenue", value: "$327M" },
                      { label: "2031 EBITDA", value: "$113M" },
                      { label: "Total Members", value: "7,863" },
                      { label: "Centers", value: "10" }
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <span className="font-mono text-lg text-primary font-bold">{stat.value}</span>
                        <p className="font-body text-xs text-muted-foreground">{stat.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
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
                <strong className="text-foreground">Regulatory Compliance:</strong> Management fee structure and extraction methods are subject to state Corporate Practice of Medicine (CPOM) laws and fee-splitting regulations. 
                Actual arrangements will be structured in compliance with applicable state laws, which may require modifications to the management fee model, use of management services organizations (MSOs), 
                or alternative corporate structures depending on jurisdiction.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Presentation Mode */}
      <PresentationMode 
        pageName="Unit Economics"
        slides={[
          {
            id: "overview",
            title: "Single-Center Economics",
            content: (
              <div className="space-y-6">
                <h2 className="font-display text-4xl font-medium text-center mb-8">Single-Center Unit Economics</h2>
                <div className="grid md:grid-cols-4 gap-6">
                  {[
                    { value: "$57.5M", label: "Annual Revenue", sub: "Membership + Ancillary" },
                    { value: "$19.8M", label: "EBITDA", sub: "34% margin" },
                    { value: "1,365", label: "Members", sub: "At capacity" },
                    { value: "66%", label: "Gross Margin", sub: "After COGS" }
                  ].map((item, i) => (
                    <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center">
                      <span className="font-mono text-4xl font-bold text-gradient">{item.value}</span>
                      <p className="font-display font-medium mt-2">{item.label}</p>
                      <p className="font-body text-sm text-muted-foreground">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          },
          {
            id: "revenue",
            title: "Revenue Composition",
            content: (
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-medium text-center">Revenue Composition</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h3 className="font-display text-xl font-medium mb-4 text-primary">Membership (50%)</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-muted/30 rounded-lg"><span>ELITE (85%)</span><span className="font-mono">$29,500/yr</span></div>
                      <div className="flex justify-between p-3 bg-muted/30 rounded-lg"><span>CHECK (15%)</span><span className="font-mono">$12,500/yr</span></div>
                      <div className="flex justify-between p-3 bg-primary/10 rounded-lg border border-primary/20"><span className="font-medium">Blended ARPM</span><span className="font-mono font-bold text-primary">$26,950</span></div>
                    </div>
                  </div>
                  <div className="bg-card border border-border rounded-2xl p-8">
                    <h3 className="font-display text-xl font-medium mb-4 text-accent">Ancillary (50%)</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between p-3 bg-muted/30 rounded-lg"><span>Therapeutics</span><span className="font-mono">60% margin</span></div>
                      <div className="flex justify-between p-3 bg-muted/30 rounded-lg"><span>Peptides & Biologics</span><span className="font-mono">60% margin</span></div>
                      <div className="flex justify-between p-3 bg-accent/10 rounded-lg border border-accent/20"><span className="font-medium">Ancillary Margin</span><span className="font-mono font-bold text-accent">60%</span></div>
                    </div>
                  </div>
                </div>
              </div>
            )
          },
          {
            id: "costs",
            title: "Cost Structure",
            content: (
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-medium text-center">Cost Structure</h2>
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <table className="w-full">
                    <thead><tr className="border-b border-border bg-muted/30"><th className="text-left p-5">Category</th><th className="text-right p-5">Amount</th><th className="text-right p-5">% Rev</th></tr></thead>
                    <tbody>
                      {[
                        { cat: "Cost of Goods Sold", amt: "$19.6M", pct: "34%" },
                        { cat: "Staffing & Payroll", amt: "$8.5M", pct: "15%" },
                        { cat: "Facility & Operations", amt: "$4.6M", pct: "8%" },
                        { cat: "Marketing & Sales", amt: "$2.9M", pct: "5%" },
                        { cat: "Technology & Admin", amt: "$2.1M", pct: "4%" }
                      ].map((r, i) => (<tr key={i} className="border-b border-border/50"><td className="p-5">{r.cat}</td><td className="p-5 text-right font-mono">{r.amt}</td><td className="p-5 text-right font-mono text-muted-foreground">{r.pct}</td></tr>))}
                      <tr className="bg-primary/10"><td className="p-5 font-bold">EBITDA</td><td className="p-5 text-right font-mono font-bold text-primary">$19.8M</td><td className="p-5 text-right font-mono font-bold text-primary">34%</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )
          },
          {
            id: "capacity",
            title: "Diagnostic Capacity",
            content: (
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-medium text-center">Diagnostic Suite Capacity</h2>
                <p className="text-muted-foreground text-center">6-7 suites per center • 4-hour diagnostic protocol</p>
                <div className="grid md:grid-cols-3 gap-6">
                  {[
                    { scenario: "Standard Hours", hours: "7AM-5:30PM M-F", capacity: "1,750" },
                    { scenario: "Extended Hours", hours: "+Evening M-F", capacity: "2,250" },
                    { scenario: "Full Weekend", hours: "+Sat/Sun", capacity: "3,050" }
                  ].map((item, i) => (
                    <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center">
                      <h3 className="font-display text-lg font-medium mb-2">{item.scenario}</h3>
                      <p className="font-body text-sm text-muted-foreground mb-4">{item.hours}</p>
                      <div className="font-mono text-4xl font-bold text-primary">{item.capacity}</div>
                      <p className="font-body text-sm text-muted-foreground mt-2">members/year</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          },
          {
            id: "takeaways",
            title: "Key Takeaways",
            content: (
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-medium text-center">Key Takeaways</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {[
                    { title: "High-Margin Model", desc: "66% gross margin with 34% EBITDA at maturity" },
                    { title: "Diversified Revenue", desc: "50/50 split between memberships and ancillary" },
                    { title: "Scalable Operations", desc: "Fixed cost base leveraged across growing membership" },
                    { title: "Capacity Headroom", desc: "Multiple levers to expand diagnostic throughput" }
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
