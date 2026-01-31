/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Founders page - Founding team and strategic backers
 */

import { motion } from "framer-motion";
import { Star, Film, Gamepad2, Clapperboard, PieChart, DollarSign, TrendingUp, Users, FileText, Shield, Check, AlertTriangle, Download, FolderOpen, FileSpreadsheet, Presentation, FileCheck } from "lucide-react";
import { toast } from "sonner";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Investors() {
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
              FOUNDING TEAM
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Visionary Founders
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Lumastem is built by founders who understand the intersection of 
              health, wellness, and cultural influence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Founders Group Photo */}
      <section className="py-12">
        <div className="container">
          <motion.div 
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeInUp}
          >
            <div className="relative rounded-2xl overflow-hidden border border-border group">
              <img 
                src="/images/founders-group.png" 
                alt="Lumastem Founders - Joe Russo, Chris Hemsworth, Josh Brolin, Donald Mustard"
                className="w-full h-auto"
              />
              {/* Hover overlay with founder names */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300">
                {/* Joe Russo */}
                <div className="absolute bottom-24 left-[8%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/30">
                    <p className="font-display text-sm text-white font-medium">Joe Russo</p>
                    <p className="font-mono text-xs text-primary">Director, Avengers: Endgame</p>
                  </div>
                </div>
                {/* Chris Hemsworth */}
                <div className="absolute bottom-32 left-[30%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-150">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/30">
                    <p className="font-display text-sm text-white font-medium">Chris Hemsworth</p>
                    <p className="font-mono text-xs text-primary">Actor, Producer</p>
                  </div>
                </div>
                {/* Josh Brolin */}
                <div className="absolute bottom-32 left-[55%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/30">
                    <p className="font-display text-sm text-white font-medium">Josh Brolin</p>
                    <p className="font-mono text-xs text-primary">Actor, Producer</p>
                  </div>
                </div>
                {/* Donald Mustard */}
                <div className="absolute bottom-24 right-[8%] opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-250">
                  <div className="bg-black/80 backdrop-blur-sm rounded-lg px-3 py-2 border border-primary/30">
                    <p className="font-display text-sm text-white font-medium">Donald Mustard</p>
                    <p className="font-mono text-xs text-primary">Creator of Fortnite</p>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <p className="font-display text-lg text-white text-center">
                  Trusted by Leaders Shaping Global Culture
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                name: "Joe Russo",
                role: "Film Director & Producer",
                icon: Clapperboard,
                image: "/images/joe-russo.jpg",
                imagePosition: "object-top",
                credits: "Avengers: Endgame, Infinity War",
                description: "Co-directed the highest-grossing film of all time. Brings unparalleled entertainment industry connections and storytelling expertise."
              },
              {
                name: "Chris Hemsworth",
                role: "Actor & Wellness Advocate",
                icon: Star,
                image: "/images/chris-hemsworth.jpg",
                imagePosition: "object-top",
                credits: "Thor, Limitless",
                description: "Global icon and founder of Centr fitness app. Personal commitment to longevity science and massive social reach."
              },
              {
                name: "Josh Brolin",
                role: "Actor & Producer",
                icon: Film,
                image: "/images/josh-brolin.png",
                imagePosition: "object-center",
                credits: "Avengers, Dune, No Country for Old Men",
                description: "Academy Award-nominated actor with decades of Hollywood influence and personal interest in regenerative medicine."
              },
              {
                name: "Donald Mustard",
                role: "Chief Creative Officer",
                icon: Gamepad2,
                image: "/images/donald-mustard.jpg",
                imagePosition: "object-center",
                credits: "Fortnite, Infinity Blade",
                description: "Creative visionary behind Fortnite's cultural phenomenon. Brings gaming industry connections and Gen Z/Millennial reach."
              }
            ].map((investor, index) => (
              <motion.div 
                key={index}
                variants={scaleIn}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl overflow-hidden h-full hover:border-accent/50 transition-colors">
                  {/* Investor Photo */}
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={investor.image} 
                      alt={investor.name}
                      className={`w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ${investor.imagePosition}`}
                    />
                  </div>
                  {/* Investor Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                        <investor.icon className="w-5 h-5 text-background" />
                      </div>
                      <div>
                        <h3 className="font-display text-xl font-medium">{investor.name}</h3>
                        <p className="font-body text-xs text-primary">{investor.role}</p>
                      </div>
                    </div>
                    <p className="font-mono text-xs text-muted-foreground mb-3">{investor.credits}</p>
                    <p className="font-body text-sm text-muted-foreground">{investor.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Our Founders Matter */}
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
                STRATEGIC VALUE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                More Than Capital
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Our founders bring unique advantages that accelerate growth and 
                build unmatched brand credibility.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {[
                {
                  value: "100M+",
                  label: "Combined Social Reach",
                  description: "Direct access to health-conscious, affluent audiences across entertainment and gaming"
                },
                {
                  value: "Global",
                  label: "Brand Recognition",
                  description: "Instant credibility and trust from association with household names"
                },
                {
                  value: "Strategic",
                  label: "Industry Connections",
                  description: "Access to entertainment, sports, and tech networks for partnerships and expansion"
                }
              ].map((stat, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-colors">
                  <span className="font-display text-4xl font-bold text-gradient">{stat.value}</span>
                  <h4 className="font-display text-lg font-medium mt-2 mb-2">{stat.label}</h4>
                  <p className="font-body text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Series A Investment Summary */}
      <section className="py-20 bg-gradient-to-b from-transparent via-primary/5 to-transparent">
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
                SERIES A INVESTMENT
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Investment Opportunity
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
                Join us in building the future of physician-led regenerative medicine.
              </p>
            </motion.div>

            {/* Key Deal Terms */}
            <motion.div variants={fadeInUp} className="bg-card border-2 border-primary/30 rounded-2xl overflow-hidden mb-8">
              <div className="p-6 bg-primary/5 border-b border-primary/20">
                <h3 className="font-display text-2xl font-medium text-center">Series A Term Summary</h3>
              </div>
              <div className="grid md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-border">
                {[
                  { label: "Raise Amount", value: "$50M", subtext: "Target close Q1 2025" },
                  { label: "Pre-Money Valuation", value: "$150M", subtext: "Post-money: $200M" },
                  { label: "Minimum Investment", value: "$1M", subtext: "Qualified investors" },
                  { label: "Series A Ownership", value: "25%", subtext: "Fully diluted" }
                ].map((item, i) => (
                  <div key={i} className="p-6 text-center">
                    <p className="font-body text-sm text-muted-foreground mb-2">{item.label}</p>
                    <p className="font-display text-3xl font-bold text-primary">{item.value}</p>
                    <p className="font-mono text-xs text-muted-foreground mt-1">{item.subtext}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Investment Highlights */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: TrendingUp,
                  title: "Projected Returns",
                  highlight: "8-45x MOIC",
                  description: "Based on 20x EBITDA exit multiple at 2029-2031 exit scenarios"
                },
                {
                  icon: Shield,
                  title: "Investor Protections",
                  highlight: "1x Non-Participating",
                  description: "Standard liquidation preference with pro-rata rights and anti-dilution"
                },
                {
                  icon: Users,
                  title: "Board Representation",
                  highlight: "1 Board Seat",
                  description: "Lead investor receives board seat; 5-member board maximum"
                }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-display font-medium mb-1">{item.title}</h4>
                  <p className="font-mono text-lg text-primary font-medium mb-2">{item.highlight}</p>
                  <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cap Table Summary */}
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
                OWNERSHIP STRUCTURE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Cap Table Summary
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Post-Series A ownership structure and path to future financing.
              </p>
            </motion.div>

            {/* Cap Table Visual */}
            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Ownership Pie Chart Representation */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <PieChart className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-medium">Post-Series A Ownership</h3>
                </div>
                
                {/* Visual Ownership Bars */}
                <div className="space-y-4">
                  {[
                    { label: "Founders & Management", pct: 55, color: "bg-primary" },
                    { label: "Series A Investors", pct: 25, color: "bg-emerald-500" },
                    { label: "Angel/Seed Investors", pct: 12, color: "bg-amber-500" },
                    { label: "Employee Option Pool", pct: 8, color: "bg-purple-500" }
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-body text-sm text-muted-foreground">{item.label}</span>
                        <span className="font-mono text-sm font-medium">{item.pct}%</span>
                      </div>
                      <div className="h-3 bg-muted/30 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${item.color} rounded-full`}
                          style={{ width: `${item.pct}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex justify-between items-center">
                    <span className="font-body text-muted-foreground">Post-Money Valuation</span>
                    <span className="font-mono text-xl font-bold text-primary">$200M</span>
                  </div>
                </div>
              </div>

              {/* Financing Summary */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-medium">Financing Summary</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { round: "Pre-Seed", amount: "$2M", valuation: "$10M", date: "2024", status: "Closed" },
                    { round: "Seed", amount: "$8M", valuation: "$40M", date: "2024", status: "Closed" },
                    { round: "Series A", amount: "$50M", valuation: "$200M", date: "2025", status: "Current" },
                    { round: "Series B (Projected)", amount: "$100M+", valuation: "$500M+", date: "2027", status: "Planned" }
                  ].map((item, i) => (
                    <div key={i} className={`flex items-center justify-between p-3 rounded-lg ${item.status === 'Current' ? 'bg-primary/10 border border-primary/30' : 'bg-muted/20'}`}>
                      <div>
                        <span className={`font-body font-medium ${item.status === 'Current' ? 'text-primary' : ''}`}>{item.round}</span>
                        <span className="font-mono text-xs text-muted-foreground ml-2">{item.date}</span>
                      </div>
                      <div className="text-right">
                        <span className="font-mono font-medium">{item.amount}</span>
                        <span className="font-mono text-xs text-muted-foreground ml-2">@ {item.valuation}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Dilution Path */}
            <motion.div variants={fadeInUp}>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <h3 className="font-display text-xl font-medium">Projected Dilution Path</h3>
                  <p className="font-body text-sm text-muted-foreground">Founder ownership through future financing rounds</p>
                </div>
                <div className="p-6">
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-border">
                          <th className="text-left p-3 font-display font-medium">Stage</th>
                          <th className="text-center p-3 font-display font-medium">Founders</th>
                          <th className="text-center p-3 font-display font-medium">Series A</th>
                          <th className="text-center p-3 font-display font-medium">Series B</th>
                          <th className="text-center p-3 font-display font-medium">Option Pool</th>
                        </tr>
                      </thead>
                      <tbody className="font-body">
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Post-Series A (Current)</td>
                          <td className="p-3 text-center font-mono">55%</td>
                          <td className="p-3 text-center font-mono text-emerald-400">25%</td>
                          <td className="p-3 text-center font-mono text-muted-foreground">—</td>
                          <td className="p-3 text-center font-mono">8%</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Post-Series B (2027)</td>
                          <td className="p-3 text-center font-mono">44%</td>
                          <td className="p-3 text-center font-mono">20%</td>
                          <td className="p-3 text-center font-mono text-amber-400">20%</td>
                          <td className="p-3 text-center font-mono">10%</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Exit (2031)</td>
                          <td className="p-3 text-center font-mono">40%</td>
                          <td className="p-3 text-center font-mono">18%</td>
                          <td className="p-3 text-center font-mono">18%</td>
                          <td className="p-3 text-center font-mono">12%</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-6 bg-primary/5 border border-primary/20 rounded-xl p-4">
                    <div className="flex items-start gap-3">
                      <TrendingUp className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-body text-sm">
                          <strong className="text-foreground">Series A Value Creation:</strong> At 20x EBITDA exit in 2031, 
                          Series A investors' 18% ownership represents <span className="text-primary font-medium">$414M value</span> on 
                          $50M invested — an <span className="text-emerald-400 font-medium">8.3x return</span> after dilution.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Term Sheet Summary */}
            <motion.div variants={fadeInUp} className="mt-12">
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <div className="p-6 border-b border-border bg-muted/30">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium">Series A Term Sheet Summary</h3>
                      <p className="font-body text-sm text-muted-foreground">Key terms for the $50M Series A financing</p>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Key Economic Terms */}
                    <div>
                      <h4 className="font-display font-medium mb-4 flex items-center gap-2">
                        <DollarSign className="w-4 h-4 text-primary" />
                        Economic Terms
                      </h4>
                      <div className="space-y-3">
                        {[
                          { term: "Round Size", value: "$50,000,000" },
                          { term: "Pre-Money Valuation", value: "$150,000,000" },
                          { term: "Post-Money Valuation", value: "$200,000,000" },
                          { term: "Price Per Share", value: "$12.50" },
                          { term: "Liquidation Preference", value: "1x Non-Participating" },
                          { term: "Dividends", value: "Non-Cumulative, 8%" }
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between items-center py-2 border-b border-border/30">
                            <span className="font-body text-sm text-muted-foreground">{item.term}</span>
                            <span className="font-mono text-sm font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Governance & Rights */}
                    <div>
                      <h4 className="font-display font-medium mb-4 flex items-center gap-2">
                        <Shield className="w-4 h-4 text-primary" />
                        Governance & Rights
                      </h4>
                      <div className="space-y-3">
                        {[
                          { term: "Board Seats", value: "1 of 5 Directors" },
                          { term: "Anti-Dilution", value: "Broad-Based Weighted Avg" },
                          { term: "Pro-Rata Rights", value: "Yes, for future rounds" },
                          { term: "Information Rights", value: "Quarterly financials" },
                          { term: "Protective Provisions", value: "Standard" },
                          { term: "Drag-Along", value: "Majority approval" }
                        ].map((item, i) => (
                          <div key={i} className="flex justify-between items-center py-2 border-b border-border/30">
                            <span className="font-body text-sm text-muted-foreground">{item.term}</span>
                            <span className="font-mono text-sm font-medium">{item.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Investor-Friendly Highlights */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-display font-medium mb-4">Investor-Friendly Terms</h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {[
                        { icon: Check, text: "1x non-participating preference protects downside" },
                        { icon: Check, text: "Pro-rata rights to maintain ownership in future rounds" },
                        { icon: Check, text: "Board observer seat for investors $5M+" }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-lg p-3">
                          <item.icon className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                          <span className="font-body text-sm text-emerald-100">{item.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment Philosophy */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <blockquote className="font-display text-3xl md:text-4xl font-medium leading-relaxed mb-8">
                "Lumastem represents the future of healthcare—where cutting-edge science meets 
                <span className="text-gradient"> personalized, luxury care</span>. We're not just 
                investors; we're believers in this mission."
              </blockquote>
              <p className="font-body text-muted-foreground">
                — Strategic Investor Group
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Data Room */}
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
                INVESTOR RESOURCES
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Data Room
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Access key documents and financial models for due diligence.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: FileSpreadsheet,
                  title: "Financial Model",
                  description: "5-year projections with detailed assumptions, unit economics, and sensitivity analysis",
                  format: "Excel",
                  size: "2.4 MB",
                  available: true
                },
                {
                  icon: Presentation,
                  title: "Investor Deck",
                  description: "Comprehensive pitch deck with market analysis, competitive positioning, and growth strategy",
                  format: "PDF",
                  size: "8.1 MB",
                  available: true
                },
                {
                  icon: FileText,
                  title: "Executive Summary",
                  description: "2-page overview of the investment opportunity and key highlights",
                  format: "PDF",
                  size: "0.5 MB",
                  available: true
                },
                {
                  icon: FileCheck,
                  title: "Term Sheet",
                  description: "Series A term sheet with detailed investment terms and conditions",
                  format: "PDF",
                  size: "0.3 MB",
                  available: true
                },
                {
                  icon: FolderOpen,
                  title: "Corporate Documents",
                  description: "Certificate of incorporation, bylaws, and organizational documents",
                  format: "ZIP",
                  size: "1.2 MB",
                  available: false
                },
                {
                  icon: FileText,
                  title: "Market Research",
                  description: "Third-party market analysis and competitive landscape report",
                  format: "PDF",
                  size: "4.7 MB",
                  available: false
                }
              ].map((doc, i) => (
                <div key={i} className={`bg-card border rounded-2xl p-6 ${doc.available ? 'border-border hover:border-primary/50' : 'border-border/50 opacity-60'} transition-colors`}>
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <doc.icon className="w-6 h-6 text-primary" />
                    </div>
                    {doc.available ? (
                      <button 
                        onClick={() => toast.info("Document Placeholder", { description: "This document will be available once uploaded. Contact invest@lumastem.com for access." })}
                        className="flex items-center gap-1 text-sm text-primary hover:underline"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </button>
                    ) : (
                      <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded">Upon Request</span>
                    )}
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2">{doc.title}</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">{doc.description}</p>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="bg-muted px-2 py-1 rounded">{doc.format}</span>
                    <span>{doc.size}</span>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 bg-muted/30 rounded-xl p-6 text-center">
              <p className="font-body text-sm text-muted-foreground mb-4">
                Additional documents available upon execution of NDA. Contact us to request access.
              </p>
              <a href="/contact" className="inline-flex items-center gap-2 text-primary hover:underline font-medium">
                Request Data Room Access →
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Risk Factors */}
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
              <span className="font-mono text-amber-500 text-sm tracking-wider">
                IMPORTANT DISCLOSURES
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Risk Factors
              </h2>
              <p className="font-body text-xl text-muted-foreground">
                Prospective investors should carefully consider the following risk factors before making an investment decision.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              {[
                {
                  category: "Regulatory Risk",
                  risks: [
                    "FDA and state medical board regulations may impact treatment offerings",
                    "Changes in biologics manufacturing requirements could increase costs",
                    "CPOM laws vary by state and may affect operational structure"
                  ]
                },
                {
                  category: "Competitive Risk",
                  risks: [
                    "Large healthcare systems may enter the regenerative medicine space",
                    "New technologies could disrupt current treatment protocols",
                    "Pricing pressure from alternative longevity providers"
                  ]
                },
                {
                  category: "Execution Risk",
                  risks: [
                    "Ability to recruit and retain qualified physicians and clinical staff",
                    "Center buildout timelines may be delayed by permitting or construction",
                    "Member acquisition costs may exceed projections in new markets"
                  ]
                },
                {
                  category: "Financial Risk",
                  risks: [
                    "Revenue projections are forward-looking and may not be achieved",
                    "Additional capital may be required before profitability",
                    "Economic downturn could reduce demand for premium healthcare services"
                  ]
                },
                {
                  category: "Operational Risk",
                  risks: [
                    "Biologics manufacturing quality control is critical to outcomes",
                    "Medical malpractice and liability exposure inherent in healthcare",
                    "Key person risk with founding team and medical leadership"
                  ]
                },
                {
                  category: "Market Risk",
                  risks: [
                    "Regenerative medicine market adoption may be slower than projected",
                    "Economic downturn could impact discretionary healthcare spending",
                    "International expansion subject to foreign regulatory approval"
                  ]
                }
              ].map((section, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center">
                      <AlertTriangle className="w-4 h-4 text-amber-500" />
                    </div>
                    <h3 className="font-display text-lg font-medium">{section.category}</h3>
                  </div>
                  <ul className="space-y-2">
                    {section.risks.map((risk, j) => (
                      <li key={j} className="font-body text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-amber-500 mt-1">•</span>
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8">
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-6">
                <div className="flex items-start gap-4">
                  <AlertTriangle className="w-6 h-6 text-amber-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-display font-medium mb-2">Forward-Looking Statements</h4>
                    <p className="font-body text-sm text-muted-foreground">
                      This presentation contains forward-looking statements regarding Lumastem's business strategy, financial projections, 
                      and market opportunity. These statements involve known and unknown risks, uncertainties, and other factors that may 
                      cause actual results to differ materially from those expressed or implied. Past performance is not indicative of 
                      future results. Investors should conduct their own due diligence and consult with financial, legal, and tax advisors 
                      before making any investment decision.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
