/**
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Memberships page - Detailed breakdown of CHECK and ELITE membership tiers
 */

import { motion } from "framer-motion";
import { Check, Crown, Sparkles, Heart, Activity, FlaskConical, Users, Calendar, Home, Stethoscope, Dna, Pill, Shield, ArrowRight, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Memberships() {
  return (
    <Layout>
      {/* Page Header */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
        
        <div className="container relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary text-sm tracking-wider">
              MEMBERSHIP TIERS
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Two Paths to Longevity
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Comprehensive membership programs designed for individuals committed to 
              optimizing their healthspan through physician-led regenerative medicine.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Membership Comparison Overview */}
      <section className="py-12">
        <div className="container">
          <motion.div 
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* ELITE Membership - Primary Tier (85% of members) */}
            <motion.div variants={scaleIn} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-accent text-accent-foreground text-xs font-mono rounded-full">
                85% OF MEMBERS
              </div>
              <div className="relative bg-card border-2 border-accent rounded-3xl p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center">
                    <Crown className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium">ELITE</h3>
                    <p className="text-sm text-muted-foreground">Full Regenerative Program</p>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="font-display text-4xl font-medium">$29,500</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
                <p className="font-body text-muted-foreground mb-6">
                  Complete access to Lumastem's regenerative medicine platform including 
                  biologics, peptides, and ongoing physician-led care.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span>Everything in CHECK, plus...</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span>MUSE Cell therapy access</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span>Peptide & hormone protocols</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span>90% at-home care delivery</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span>Dedicated Longevity Physician</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CHECK Membership */}
            <motion.div variants={scaleIn} className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-card border border-border rounded-3xl p-8 h-full hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-medium">CHECK</h3>
                    <p className="text-sm text-muted-foreground">Diagnostic Foundation</p>
                  </div>
                </div>
                <div className="mb-6">
                  <span className="font-display text-4xl font-medium">$12,500</span>
                  <span className="text-muted-foreground">/year</span>
                </div>
                <p className="font-body text-muted-foreground mb-6">
                  Comprehensive diagnostic assessment and personalized health roadmap 
                  for those beginning their longevity journey.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>Annual comprehensive diagnostics</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>Personalized health assessment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>Longevity roadmap development</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span>Physician consultation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ELITE Membership Details - Primary Tier (85% of business) */}
      <section className="py-20 bg-card/30">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center">
                <Crown className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h2 className="font-display text-4xl font-medium">ELITE Membership</h2>
                <p className="text-muted-foreground">$29,500/year • Full Regenerative Program</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Dna,
                  title: "Regenerative Biologics",
                  items: [
                    "MUSE Cell therapy protocols",
                    "Exosome treatments",
                    "PRP/PRF therapies",
                    "Personalized cell banking option",
                    "Quarterly treatment cycles"
                  ]
                },
                {
                  icon: Pill,
                  title: "Peptide & Hormone Programs",
                  items: [
                    "Custom peptide protocols",
                    "Hormone optimization",
                    "GeneMetrics™ integration",
                    "Monthly protocol adjustments",
                    "At-home delivery included"
                  ]
                },
                {
                  icon: FlaskConical,
                  title: "Advanced Diagnostics",
                  items: [
                    "Everything in CHECK, plus...",
                    "Quarterly biomarker tracking",
                    "Epigenetic age testing",
                    "Microbiome analysis",
                    "Continuous glucose monitoring"
                  ]
                },
                {
                  icon: Home,
                  title: "90% At-Home Care Model",
                  items: [
                    "Concierge nurse visits",
                    "Treatment delivery to home",
                    "Telemedicine consultations",
                    "Remote monitoring devices",
                    "24/7 physician access"
                  ]
                },
                {
                  icon: Users,
                  title: "Dedicated Care Team",
                  items: [
                    "Personal Longevity Physician",
                    "Assigned nurse practitioner",
                    "Concierge coordinator",
                    "Nutritionist access",
                    "Fitness optimization guidance"
                  ]
                },
                {
                  icon: Shield,
                  title: "Premium Benefits",
                  items: [
                    "Priority scheduling always",
                    "Family member discounts",
                    "Travel health coordination",
                    "Partner clinic network access",
                    "Annual wellness retreat invite"
                  ]
                }
              ].map((category, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-accent/50 transition-colors">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-5 h-5 text-accent" />
                    <h3 className="font-display text-lg font-medium">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-r from-accent/10 to-primary/10 rounded-2xl p-6">
              <h4 className="font-display font-medium mb-4">ELITE Membership Economics</h4>
              <div className="grid md:grid-cols-5 gap-6 text-center">
                <div>
                  <span className="font-mono text-2xl text-accent">$29,500</span>
                  <p className="text-xs text-muted-foreground mt-1">Annual Fee</p>
                </div>
                <div>
                  <span className="font-mono text-2xl text-foreground">70%</span>
                  <p className="text-xs text-muted-foreground mt-1">Renewal Rate</p>
                </div>
                <div>
                  <span className="font-mono text-2xl text-foreground">85%</span>
                  <p className="text-xs text-muted-foreground mt-1">Member Mix</p>
                </div>
                <div>
                  <span className="font-mono text-2xl text-foreground">3.3 yrs</span>
                  <p className="text-xs text-muted-foreground mt-1">Avg Tenure</p>
                </div>
                <div>
                  <span className="font-mono text-2xl text-foreground">$97,350</span>
                  <p className="text-xs text-muted-foreground mt-1">Lifetime Value</p>
                </div>
              </div>
            </motion.div>

            {/* ELITE Member Journey Timeline */}
            <motion.div variants={fadeInUp} className="mt-12">
              <h3 className="font-display text-2xl font-medium text-center mb-8">ELITE Member Journey</h3>
              <p className="font-body text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
                From onboarding through ongoing care, every ELITE member receives personalized attention from their dedicated care team. 
                ELITE Physicians work under the supervision of the center's Medical Director where testing was completed.
              </p>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-accent via-primary to-accent hidden md:block" />
                
                <div className="grid md:grid-cols-5 gap-6">
                  {[
                    {
                      phase: "Week 1",
                      title: "Onboarding",
                      team: "Care Coordinator",
                      activities: ["Welcome call & intake", "Medical history review", "Schedule diagnostics", "Portal setup"]
                    },
                    {
                      phase: "Week 2-3",
                      title: "Diagnostics",
                      team: "Center Ops Team",
                      activities: ["Full-body MRI", "Advanced bloodwork", "Genetic testing", "Specialist consults"]
                    },
                    {
                      phase: "Week 4",
                      title: "Results Review",
                      team: "ELITE Physician",
                      activities: ["2-hour consultation", "Protocol development", "Treatment planning", "Goal setting"]
                    },
                    {
                      phase: "Ongoing",
                      title: "Active Care",
                      team: "Full ELITE Team",
                      activities: ["Monthly check-ins", "At-home treatments", "Protocol adjustments", "24/7 access"]
                    },
                    {
                      phase: "Quarterly",
                      title: "Optimization",
                      team: "ELITE Physician",
                      activities: ["Biomarker tracking", "Progress review", "Protocol refinement", "Renewal planning"]
                    }
                  ].map((step, i) => (
                    <div key={i} className="relative">
                      <div className="w-4 h-4 rounded-full bg-accent mx-auto mb-4 relative z-10 hidden md:block" />
                      <div className="bg-card border border-border rounded-xl p-4 hover:border-accent/50 transition-colors">
                        <span className="font-mono text-xs text-accent">{step.phase}</span>
                        <h4 className="font-display font-medium mt-1">{step.title}</h4>
                        <p className="text-xs text-muted-foreground mt-1 mb-3">Primary: {step.team}</p>
                        <ul className="space-y-1">
                          {step.activities.map((activity, j) => (
                            <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                              <div className="w-1 h-1 rounded-full bg-accent mt-1.5 shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-muted/30 rounded-xl p-4 text-center">
                <p className="text-sm text-muted-foreground">
                  <span className="font-medium text-foreground">Care Team Structure:</span> Each ELITE member is assigned a dedicated team of 1 Physician, 1 Medical Assistant, 
                  and 1 Care Coordinator (shared among 60 members). The ELITE Physician works under the supervision of the center's Medical Director.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CHECK Membership Details */}
      <section className="py-20">
        <div className="container">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-12">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <Check className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="font-display text-4xl font-medium">CHECK Membership</h2>
                <p className="text-muted-foreground">$12,500/year • Diagnostic Foundation</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                {
                  icon: Activity,
                  title: "Comprehensive Diagnostics",
                  items: [
                    "Full-body MRI screening",
                    "Advanced bloodwork panel (100+ biomarkers)",
                    "Genetic testing & analysis",
                    "Cardiovascular assessment",
                    "Metabolic profiling"
                  ]
                },
                {
                  icon: Stethoscope,
                  title: "Physician Consultation",
                  items: [
                    "2-hour initial consultation",
                    "Results review session",
                    "Personalized health report",
                    "Risk factor identification",
                    "Lifestyle recommendations"
                  ]
                },
                {
                  icon: Calendar,
                  title: "Annual Program",
                  items: [
                    "One comprehensive visit per year",
                    "Digital health dashboard access",
                    "Year-over-year tracking",
                    "Priority scheduling",
                    "Upgrade path to ELITE"
                  ]
                }
              ].map((category, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <category.icon className="w-5 h-5 text-primary" />
                    <h3 className="font-display text-lg font-medium">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-muted/30 rounded-2xl p-6">
              <h4 className="font-display font-medium mb-4">CHECK Membership Economics</h4>
              <div className="grid md:grid-cols-4 gap-6 text-center">
                <div>
                  <span className="font-mono text-2xl text-primary">$12,500</span>
                  <p className="text-xs text-muted-foreground mt-1">Annual Fee</p>
                </div>
                <div>
                  <span className="font-mono text-2xl text-foreground">10%</span>
                  <p className="text-xs text-muted-foreground mt-1">Renewal Rate</p>
                </div>
                <div>
                  <span className="font-mono text-2xl text-foreground">15%</span>
                  <p className="text-xs text-muted-foreground mt-1">Member Mix</p>
                </div>
                <div>
                  <span className="font-mono text-2xl text-foreground">25%</span>
                  <p className="text-xs text-muted-foreground mt-1">ELITE Upgrade Rate</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Member Journey */}
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
                MEMBER EXPERIENCE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                The ELITE Member Journey
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                A year in the life of an ELITE member, from initial assessment through ongoing optimization
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              {[
                {
                  phase: "Month 1",
                  title: "Comprehensive Assessment",
                  description: "Full diagnostic workup including MRI, bloodwork, genetic testing, and 2-hour physician consultation to establish baseline and create personalized protocol."
                },
                {
                  phase: "Month 2-3",
                  title: "Protocol Initiation",
                  description: "Begin personalized peptide and hormone protocols with at-home delivery. First regenerative treatment cycle with MUSE cells or exosomes as indicated."
                },
                {
                  phase: "Month 4-6",
                  title: "Optimization Phase",
                  description: "Quarterly biomarker check, protocol adjustments based on response. Ongoing telemedicine support and concierge nurse visits as needed."
                },
                {
                  phase: "Month 7-9",
                  title: "Maintenance & Enhancement",
                  description: "Second regenerative treatment cycle. Continued peptide/hormone optimization. Mid-year comprehensive review with Longevity Physician."
                },
                {
                  phase: "Month 10-12",
                  title: "Annual Review & Renewal",
                  description: "Full diagnostic reassessment to measure progress. Year-over-year comparison. Protocol refinement for year two. Renewal consultation."
                }
              ].map((step, i) => (
                <div key={i} className="flex gap-6 items-start">
                  <div className="w-24 shrink-0 text-right">
                    <span className="font-mono text-sm text-primary">{step.phase}</span>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-primary mt-2 shrink-0" />
                  <div className="flex-1 pb-6 border-b border-border/50 last:border-0">
                    <h4 className="font-display text-lg font-medium mb-2">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Ancillary Revenue */}
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
                REVENUE EXPANSION
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Ancillary Revenue Streams
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Beyond membership fees, ELITE members generate significant ancillary revenue 
                through additional products and services at 60% contribution margin.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-xl font-medium mb-6">Ancillary Products & Services</h3>
                <div className="space-y-4">
                  {[
                    { category: "Peptide Protocols", percentage: "35%", revenue: "$6.8M", description: "Custom peptide compounds and protocols" },
                    { category: "Nutraceuticals", percentage: "25%", revenue: "$4.8M", description: "Premium supplements and compounds" },
                    { category: "Advanced Treatments", percentage: "25%", revenue: "$4.8M", description: "Additional regenerative procedures" },
                    { category: "At-Home Services", percentage: "15%", revenue: "$2.9M", description: "Concierge visits and delivery" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-3 border-b border-border/50 last:border-0">
                      <div>
                        <span className="font-body text-foreground">{item.category}</span>
                        <p className="text-xs text-muted-foreground">{item.description}</p>
                      </div>
                      <div className="text-right">
                        <span className="font-mono text-primary">{item.percentage}</span>
                        <p className="text-xs text-muted-foreground">{item.revenue} Y5</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-xl font-medium mb-6">Revenue Model</h3>
                <div className="space-y-6">
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Ancillary as % of Membership</span>
                    <span className="font-mono text-2xl text-primary">50%</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Contribution Margin</span>
                    <span className="font-mono text-2xl text-foreground">60%</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground">Year 5 Ancillary Revenue</span>
                    <span className="font-mono text-2xl text-foreground">$19.3M</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Year 5 Contribution</span>
                    <span className="font-mono text-2xl text-accent">$11.6M</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Referral Program */}
      <section className="py-20 bg-card/30">
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
                MEMBER ACQUISITION
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Referral Program
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Our member referral program drives 40% of new member acquisition at significantly lower CAC.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8 text-left">
                <Sparkles className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-display text-xl font-medium mb-2">Referring Member</h3>
                <p className="text-3xl font-mono text-primary mb-2">$500</p>
                <p className="text-sm text-muted-foreground">Credit toward next membership renewal</p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-8 text-left">
                <Heart className="w-8 h-8 text-accent mb-4" />
                <h3 className="font-display text-xl font-medium mb-2">New Member</h3>
                <p className="text-3xl font-mono text-primary mb-2">$500</p>
                <p className="text-sm text-muted-foreground">Credit toward first membership fee</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 bg-muted/30 rounded-2xl p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <span className="font-mono text-2xl text-primary">$1,000</span>
                  <p className="text-xs text-muted-foreground mt-1">Total Referral CAC</p>
                </div>
                <div>
                  <span className="font-mono text-2xl text-foreground">40%</span>
                  <p className="text-xs text-muted-foreground mt-1">New Members from Referrals</p>
                </div>
                <div>
                  <span className="font-mono text-2xl text-foreground">$300K</span>
                  <p className="text-xs text-muted-foreground mt-1">Annual CAC Savings vs Direct</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Side-by-Side Comparison Table */}
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
                QUICK COMPARISON
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Feature Comparison
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                A comprehensive side-by-side comparison of CHECK and ELITE membership benefits
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-4 font-display font-medium">Feature</th>
                      <th className="text-center p-4 font-display font-medium">
                        <div className="flex items-center justify-center gap-2">
                          <Check className="w-4 h-4 text-primary" />
                          CHECK
                        </div>
                        <span className="text-xs font-mono text-muted-foreground font-normal">$12,500/yr</span>
                      </th>
                      <th className="text-center p-4 font-display font-medium">
                        <div className="flex items-center justify-center gap-2">
                          <Crown className="w-4 h-4 text-accent" />
                          ELITE
                        </div>
                        <span className="text-xs font-mono text-muted-foreground font-normal">$29,500/yr</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm">
                    {[
                      { feature: "Full-body MRI Screening", check: true, elite: true, category: "Diagnostics" },
                      { feature: "Advanced Bloodwork (100+ biomarkers)", check: true, elite: true, category: "Diagnostics" },
                      { feature: "Genetic Testing & Analysis", check: true, elite: true, category: "Diagnostics" },
                      { feature: "Quarterly Biomarker Tracking", check: false, elite: true, category: "Diagnostics" },
                      { feature: "Epigenetic Age Testing", check: false, elite: true, category: "Diagnostics" },
                      { feature: "Continuous Glucose Monitoring", check: false, elite: true, category: "Diagnostics" },
                      { feature: "divider", check: false, elite: false, category: "Treatments" },
                      { feature: "MUSE Cell Therapy", check: false, elite: true, category: "Treatments" },
                      { feature: "Exosome Treatments", check: false, elite: true, category: "Treatments" },
                      { feature: "PRP/PRF Therapies", check: false, elite: true, category: "Treatments" },
                      { feature: "Custom Peptide Protocols", check: false, elite: true, category: "Treatments" },
                      { feature: "Hormone Optimization", check: false, elite: true, category: "Treatments" },
                      { feature: "divider", check: false, elite: false, category: "Care Model" },
                      { feature: "Physician Consultation", check: "1x/year", elite: "Unlimited", category: "Care Model" },
                      { feature: "Dedicated Longevity Physician", check: false, elite: true, category: "Care Model" },
                      { feature: "Concierge Nurse Visits", check: false, elite: true, category: "Care Model" },
                      { feature: "90% At-Home Care Delivery", check: false, elite: true, category: "Care Model" },
                      { feature: "24/7 Physician Access", check: false, elite: true, category: "Care Model" },
                      { feature: "Telemedicine Consultations", check: false, elite: true, category: "Care Model" },
                      { feature: "divider", check: false, elite: false, category: "Benefits" },
                      { feature: "Digital Health Dashboard", check: true, elite: true, category: "Benefits" },
                      { feature: "Priority Scheduling", check: true, elite: true, category: "Benefits" },
                      { feature: "Family Member Discounts", check: false, elite: true, category: "Benefits" },
                      { feature: "Partner Clinic Network Access", check: false, elite: true, category: "Benefits" },
                      { feature: "Annual Wellness Retreat Invite", check: false, elite: true, category: "Benefits" },
                    ].map((row, i) => (
                      row.feature === "divider" ? (
                        <tr key={i} className="bg-muted/20">
                          <td colSpan={3} className="p-2 text-xs font-mono text-primary text-center">
                            {row.category}
                          </td>
                        </tr>
                      ) : (
                        <tr key={i} className="border-b border-border/50 last:border-0 hover:bg-muted/10 transition-colors">
                          <td className="p-4 text-muted-foreground">{row.feature}</td>
                          <td className="p-4 text-center">
                            {typeof row.check === "string" ? (
                              <span className="font-mono text-xs text-primary">{row.check}</span>
                            ) : row.check ? (
                              <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mx-auto">
                                <Check className="w-3 h-3 text-primary" />
                              </div>
                            ) : (
                              <span className="text-muted-foreground/30">—</span>
                            )}
                          </td>
                          <td className="p-4 text-center">
                            {typeof row.elite === "string" ? (
                              <span className="font-mono text-xs text-accent">{row.elite}</span>
                            ) : row.elite ? (
                              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                                <Check className="w-3 h-3 text-accent" />
                              </div>
                            ) : (
                              <span className="text-muted-foreground/30">—</span>
                            )}
                          </td>
                        </tr>
                      )
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Cross-Reference to Unit Economics */}
      <section className="py-20 bg-gradient-to-b from-card/30 to-background">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-8">
              <span className="font-mono text-primary text-sm tracking-wider">
                DIVE DEEPER
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Explore the Economics
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                See how membership revenue translates into sustainable unit economics and long-term value creation
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              <Link href="/performance" className="group">
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <BarChart3 className="w-6 h-6 text-primary" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-display text-xl font-medium mb-2">Unit Economics</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    Detailed breakdown of member lifetime value, customer acquisition costs, and contribution margins by tier.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground">$97K ELITE LTV</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground">$1,900 Blended CAC</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground">51x LTV:CAC</span>
                  </div>
                </div>
              </Link>

              <Link href="/projections" className="group">
                <div className="bg-card border border-border rounded-2xl p-8 h-full hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/5">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Activity className="w-6 h-6 text-accent" />
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                  </div>
                  <h3 className="font-display text-xl font-medium mb-2">Growth Projections</h3>
                  <p className="font-body text-sm text-muted-foreground mb-4">
                    See how membership growth drives revenue from a single center to a 10-center network by 2031.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground">$57.5M Y5 Revenue</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground">1,365 Members</span>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-muted text-muted-foreground">10 Centers</span>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 bg-muted/30 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="text-center md:text-left">
                  <h4 className="font-display font-medium mb-1">Key Membership Metrics</h4>
                  <p className="text-sm text-muted-foreground">How membership economics flow into company financials</p>
                </div>
                <div className="flex flex-wrap justify-center gap-4">
                  <div className="text-center">
                    <span className="font-mono text-xl text-primary">85%</span>
                    <p className="text-xs text-muted-foreground">ELITE Mix</p>
                  </div>
                  <div className="w-px h-10 bg-border hidden md:block" />
                  <div className="text-center">
                    <span className="font-mono text-xl text-foreground">70%</span>
                    <p className="text-xs text-muted-foreground">ELITE Renewal</p>
                  </div>
                  <div className="w-px h-10 bg-border hidden md:block" />
                  <div className="text-center">
                    <span className="font-mono text-xl text-foreground">500</span>
                    <p className="text-xs text-muted-foreground">New/Year</p>
                  </div>
                  <div className="w-px h-10 bg-border hidden md:block" />
                  <div className="text-center">
                    <span className="font-mono text-xl text-accent">40%</span>
                    <p className="text-xs text-muted-foreground">From Referrals</p>
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
