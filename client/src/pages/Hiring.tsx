/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Team/Hiring page - Identifying key hires needed
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { Users, Briefcase, Stethoscope, Building2, TrendingUp, Megaphone, Code, Shield, Package, Scale, Layers, Calculator, DollarSign, Clock } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { Link } from "wouter";

export default function Hiring() {
  const [selectedScenario, setSelectedScenario] = useState<'standard' | 'extended' | 'weekend'>('standard');
  const [memberCount, setMemberCount] = useState(120);
  
  // Capacity scenarios
  const scenarios = {
    standard: { name: 'Standard Hours', capacity: 1750, hours: '7AM-5:30PM M-F' },
    extended: { name: 'Extended Hours', capacity: 2250, hours: '7AM-9PM M-F' },
    weekend: { name: 'Full Weekend', capacity: 3050, hours: '7 days/week' }
  };
  
  // Calculate utilization based on scenario
  const currentCapacity = scenarios[selectedScenario].capacity;
  const utilizationPct = ((memberCount / currentCapacity) * 100).toFixed(1);
  
  // Team count based on members (each team handles 120 members max)
  const teamsNeeded = Math.ceil(memberCount / 120);
  const staffNeeded = teamsNeeded * 4;
  
  // Staffing costs (estimated annual)
  const avgPhysicianCost = 350000; // $350K avg with MBO
  const avgMACost = 55000; // $55K
  const avgCoordinatorCost = 65000; // $65K
  const teamCost = avgPhysicianCost + avgMACost + (2 * avgCoordinatorCost); // ~$535K per team
  const totalStaffCost = teamsNeeded * teamCost;
  
  // Break-even analysis
  const annualMembershipRevenue = 60000; // $60K per member per year (ELITE membership)
  const eliteRevenuePerMember = annualMembershipRevenue * 0.85; // 85% goes to ELITE team services
  const breakEvenMembers = Math.ceil(teamCost / eliteRevenuePerMember); // Members needed to cover 1 team
  const currentRevenue = memberCount * eliteRevenuePerMember;
  const profitMargin = currentRevenue - totalStaffCost;
  const marginPerMember = memberCount > 0 ? profitMargin / memberCount : 0;
  
  // Multi-center aggregation
  const [centerCount, setCenterCount] = useState(3);
  const eliteTeamsPerCenter = 3; // Minimum teams per center at launch
  const centerOpsStaff = 14; // Fixed per center
  const corporateStaff = centerCount <= 1 ? 10 : centerCount <= 3 ? 15 : centerCount <= 5 ? 20 : 30;
  const phase1Execs = 5;
  const phase2Execs = centerCount <= 1 ? 0 : centerCount <= 3 ? 2 : 4;
  const totalEliteStaff = centerCount * eliteTeamsPerCenter * 4;
  const totalCenterOps = centerCount * centerOpsStaff;
  const totalHeadcount = phase1Execs + phase2Execs + corporateStaff + totalCenterOps + totalEliteStaff;
  const totalEliteCost = centerCount * eliteTeamsPerCenter * teamCost;
  const centerOpsCostPerCenter = 850000; // Estimated $850K for center ops team
  const totalCenterOpsCost = centerCount * centerOpsCostPerCenter;
  const corporateCost = corporateStaff * 100000; // Avg $100K per corporate role
  const execCost = (phase1Execs + phase2Execs) * 400000; // Avg $400K per exec
  const totalMultiCenterCost = totalEliteCost + totalCenterOpsCost + corporateCost + execCost;
  
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
              BUILDING THE TEAM
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Key Hires Needed
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Lumastem is pre-operational and will build a world-class team to execute 
              on our vision of physician-led regenerative medicine.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Hiring Philosophy */}
      <section className="py-12">
        <div className="container">
          <motion.div 
            className="max-w-4xl mx-auto bg-card/50 border border-primary/20 rounded-2xl p-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3 className="font-display text-2xl font-medium mb-4 text-center">Our Hiring Philosophy</h3>
            <p className="font-body text-muted-foreground text-center">
              We seek <span className="text-foreground font-medium">specialists willing to be generalists</span>. 
              Each executive will bring deep domain expertise while embracing broader responsibilities 
              as we scale. Phase 1 leaders will wear multiple hats, with specialized roles carved out 
              as the company grows.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Phase 1 - Critical Hires */}
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
              <span className="font-mono text-destructive text-sm tracking-wider">
                PHASE 1 - CRITICAL HIRES
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Founding Executive Team
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                Specialists who will serve as generalists, completing all necessary tasks required 
                by the company in its early stages. These roles are essential for launch.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Briefcase,
                  title: "Chief Executive Officer",
                  priority: "Critical",
                  timing: "Once fundraise is complete",
                  compensation: "TBD",
                  description: "Experienced healthcare executive to lead company strategy, fundraising, and stakeholder relations.",
                  initialScope: "Full executive leadership, board relations, capital strategy",
                  requirements: [
                    "10+ years healthcare leadership",
                    "Track record of scaling multi-site operations",
                    "Capital markets experience"
                  ]
                },
                {
                  icon: TrendingUp,
                  title: "Chief Financial Officer",
                  priority: "Critical",
                  timing: "Once fundraise is complete",
                  compensation: "TBD",
                  description: "Financial leader to manage capital allocation, reporting, investor relations, and initial HR/admin functions.",
                  initialScope: "Finance, accounting, HR, administration, investor reporting",
                  requirements: [
                    "Healthcare finance background",
                    "Multi-unit P&L management",
                    "IPO/exit experience preferred"
                  ]
                },
                {
                  icon: Building2,
                  title: "Chief Operating Officer",
                  priority: "Critical",
                  timing: "Once fundraise is complete",
                  compensation: "TBD",
                  description: "Operations executive to build center operations, supply chain, real estate, and member experience.",
                  initialScope: "Operations, facilities, supply chain, vendor management",
                  requirements: [
                    "Multi-site healthcare operations",
                    "Luxury hospitality experience a plus",
                    "Process optimization expertise"
                  ]
                },
                {
                  icon: Package,
                  title: "Chief Product Officer",
                  priority: "Critical",
                  timing: "Once fundraise is complete",
                  compensation: "TBD",
                  description: "Product leader who will initially own marketing and technology responsibilities until dedicated roles are added.",
                  initialScope: "Product strategy + Marketing + Technology oversight",
                  requirements: [
                    "Healthcare product development",
                    "Digital marketing expertise",
                    "Technology platform experience"
                  ]
                },
                {
                  icon: Scale,
                  title: "Chief Legal Officer",
                  priority: "Critical",
                  timing: "Once fundraise is complete",
                  compensation: "TBD",
                  description: "Legal leader to manage regulatory compliance, contracts, corporate governance, and risk management.",
                  initialScope: "Legal, compliance, regulatory, corporate governance, IP",
                  requirements: [
                    "Healthcare regulatory expertise",
                    "CPOM/MSO structure experience",
                    "M&A and corporate transactions"
                  ]
                }
              ].map((role, i) => (
                <motion.div 
                  key={i}
                  variants={scaleIn}
                  className="bg-card border border-destructive/30 rounded-2xl p-6 hover:border-destructive/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-destructive/10 flex items-center justify-center">
                      <role.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs font-mono px-2 py-1 rounded bg-destructive/10 text-destructive">
                        {role.priority}
                      </span>
                      <span className="text-xs font-mono text-muted-foreground">{role.timing}</span>
                    </div>
                  </div>
                  <h3 className="font-display text-lg font-medium mb-1">{role.title}</h3>
                  <p className="text-xs font-mono text-muted-foreground mb-2">Comp: {role.compensation}</p>
                  <p className="font-body text-sm text-muted-foreground mb-3">{role.description}</p>
                  <div className="bg-muted/30 rounded-lg p-3 mb-4">
                    <span className="text-xs font-mono text-primary">Initial Scope:</span>
                    <p className="text-xs text-muted-foreground mt-1">{role.initialScope}</p>
                  </div>
                  <div className="space-y-2">
                    {role.requirements.map((req, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive/50" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Phase 2 - Additional Leadership */}
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
              <span className="font-mono text-amber-500 text-sm tracking-wider">
                PHASE 2
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Additional Executive Roles
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-3xl mx-auto">
                As Lumastem scales, these additional executive roles will be added 
                to enable deeper focus and expertise in critical functions.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Stethoscope,
                  title: "Chief Medical Officer",
                  priority: "Phase 2",
                  compensation: "TBD",
                  description: "Board-certified physician to oversee clinical protocols, quality assurance, and regulatory compliance.",
                  requirements: [
                    "MD with regenerative medicine expertise",
                    "Clinical operations leadership",
                    "Research/publication background"
                  ]
                },
                {
                  icon: TrendingUp,
                  title: "Chief Commercial Officer",
                  priority: "Phase 2",
                  compensation: "TBD",
                  description: "Sales leader to drive membership growth, enterprise partnerships, and revenue optimization.",
                  requirements: [
                    "Healthcare/luxury sales leadership",
                    "Enterprise B2B experience",
                    "High-net-worth client relationships"
                  ]
                },
                {
                  icon: Megaphone,
                  title: "Chief Marketing Officer",
                  priority: "Phase 2",
                  compensation: "TBD",
                  description: "Marketing leader to build brand awareness, member acquisition, and founder/celebrity partnerships.",
                  requirements: [
                    "Luxury/wellness brand experience",
                    "Digital marketing expertise",
                    "Influencer/celebrity relationships"
                  ]
                },
                {
                  icon: Code,
                  title: "Chief Technology Officer",
                  priority: "Phase 2",
                  compensation: "TBD",
                  description: "Technology leader to build member platform, data infrastructure, and clinical systems integration.",
                  requirements: [
                    "Healthcare IT experience",
                    "HIPAA compliance expertise",
                    "Platform/product development"
                  ]
                }
              ].map((role, i) => (
                <motion.div 
                  key={i}
                  variants={scaleIn}
                  className="bg-card border border-amber-500/30 rounded-2xl p-6 hover:border-amber-500/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-500/10 flex items-center justify-center">
                      <role.icon className="w-6 h-6 text-amber-500" />
                    </div>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-amber-500/10 text-amber-500">
                      {role.priority}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-medium mb-1">{role.title}</h3>
                  <p className="text-xs font-mono text-muted-foreground mb-2">Comp: {role.compensation}</p>
                  <p className="font-body text-sm text-muted-foreground mb-4">{role.description}</p>
                  <div className="space-y-2">
                    {role.requirements.map((req, j) => (
                      <div key={j} className="flex items-center gap-2 text-xs text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-500/50" />
                        <span>{req}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Organizational Structure */}
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
                ORGANIZATIONAL STRUCTURE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Reporting Hierarchy
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Clear lines of accountability from board to center operations
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              {/* Board Level */}
              <div className="flex justify-center mb-8">
                <div className="bg-accent/20 border border-accent/50 rounded-xl px-6 py-3 text-center">
                  <span className="font-mono text-xs text-accent">GOVERNANCE</span>
                  <h4 className="font-display font-medium">Board of Directors</h4>
                </div>
              </div>
              
              {/* Connector */}
              <div className="flex justify-center mb-4">
                <div className="w-0.5 h-8 bg-border" />
              </div>
              
              {/* CEO Level */}
              <div className="flex justify-center mb-8">
                <div className="bg-destructive/10 border border-destructive/30 rounded-xl px-8 py-4 text-center">
                  <span className="font-mono text-xs text-destructive">EXECUTIVE LEADERSHIP</span>
                  <h4 className="font-display font-medium text-lg">Chief Executive Officer</h4>
                  <p className="text-xs text-muted-foreground mt-1">Strategy, Board Relations, Capital</p>
                </div>
              </div>
              
              {/* Connector */}
              <div className="flex justify-center mb-4">
                <div className="w-0.5 h-8 bg-border" />
              </div>
              
              {/* C-Suite Level */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { title: "CFO", scope: "Finance, HR, Admin" },
                  { title: "COO", scope: "Operations, Facilities" },
                  { title: "CPO", scope: "Product, Marketing, Tech" },
                  { title: "CLO", scope: "Legal, Compliance" }
                ].map((exec, i) => (
                  <div key={i} className="bg-primary/10 border border-primary/30 rounded-xl px-4 py-3 text-center">
                    <h4 className="font-display font-medium">{exec.title}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{exec.scope}</p>
                  </div>
                ))}
              </div>
              
              {/* Connector */}
              <div className="flex justify-center mb-4">
                <div className="flex items-end gap-4">
                  <div className="w-24 h-0.5 bg-border" />
                  <div className="w-0.5 h-8 bg-border" />
                  <div className="w-24 h-0.5 bg-border" />
                </div>
              </div>
              
              {/* Phase 2 Executives */}
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {[
                  { title: "CMO", subtitle: "(Medical)", scope: "Clinical Protocols" },
                  { title: "CCO", subtitle: "", scope: "Sales & Revenue" },
                  { title: "CMO", subtitle: "(Marketing)", scope: "Brand & Growth" },
                  { title: "CTO", subtitle: "", scope: "Technology" }
                ].map((exec, i) => (
                  <div key={i} className="bg-amber-500/10 border border-amber-500/30 rounded-xl px-4 py-3 text-center">
                    <span className="font-mono text-[10px] text-amber-500">PHASE 2</span>
                    <h4 className="font-display font-medium text-sm">{exec.title} <span className="text-muted-foreground">{exec.subtitle}</span></h4>
                    <p className="text-xs text-muted-foreground">{exec.scope}</p>
                  </div>
                ))}
              </div>
              
              {/* Connector to Operations */}
              <div className="flex justify-center mb-4">
                <div className="w-0.5 h-8 bg-border" />
              </div>
              
{/* Department Heads - Corporate Support */}
              <div className="bg-muted/30 border border-border rounded-xl p-6 mb-6">
                <div className="text-center mb-4">
                  <span className="font-mono text-xs text-muted-foreground">CORPORATE DEPARTMENT HEADS</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                  {[
                    { title: "Finance Director", reports: "Reports to CFO" },
                    { title: "HR Director", reports: "Reports to CFO" },
                    { title: "Marketing Director", reports: "Reports to CPO" },
                    { title: "Technology Director", reports: "Reports to CPO" },
                    { title: "Clinical Ops Director", reports: "Reports to COO" }
                  ].map((role, i) => (
                    <div key={i} className="bg-card border border-border rounded-lg px-3 py-2 text-center">
                      <h5 className="font-display text-sm font-medium">{role.title}</h5>
                      <p className="text-[10px] text-muted-foreground">{role.reports}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Center Operations */}
              <div className="bg-muted/30 border border-border rounded-xl p-6">
                <div className="text-center mb-4">
                  <span className="font-mono text-xs text-muted-foreground">CENTER OPERATIONS</span>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {[
                    { title: "Center Director", reports: "Reports to COO" },
                    { title: "VP of Operations", reports: "Reports to COO" },
                    { title: "Dir. Care Coordination", reports: "Reports to CMO" },
                    { title: "Dir. of Operations", reports: "Reports to COO" }
                  ].map((role, i) => (
                    <div key={i} className="bg-card border border-border rounded-lg px-3 py-2 text-center">
                      <h5 className="font-display text-sm font-medium">{role.title}</h5>
                      <p className="text-[10px] text-muted-foreground">{role.reports}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Center Operations Team */}
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
                CENTER STAFFING
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Flagship Center Team
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Two distinct teams: Center Operations for diagnostics and ancillary services, plus dedicated ELITE Membership care teams
              </p>
            </motion.div>

            {/* Center Operations Team */}
            <motion.div variants={fadeInUp} className="mb-12">
              <div className="bg-card border border-border rounded-2xl p-6 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-primary" />
                  <h3 className="font-display text-xl font-medium">Center Operations Team</h3>
                </div>
                <p className="text-sm text-muted-foreground ml-6">
                  Manages diagnostics testing and ongoing delivery of ancillary services (injections, stem cells, IVs, etc.)
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-4 font-display font-medium">Role</th>
                      <th className="text-center p-4 font-display font-medium">Headcount</th>
                      <th className="text-left p-4 font-display font-medium">Key Responsibilities</th>
                      <th className="text-center p-4 font-display font-medium">Timing</th>
                      <th className="text-center p-4 font-display font-medium">Base Salary</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm">
                    {[
                      { role: "Medical Director", count: 1, responsibilities: "Clinical oversight, protocol development, quality assurance", timing: "90 days pre-opening", salary: "$400K" },
                      { role: "Physician", count: 1, responsibilities: "Diagnostics consultations, treatment protocols, ancillary services", timing: "60 days pre-opening", salary: "$300K" },
                      { role: "Center Director", count: 1, responsibilities: "P&L ownership, team leadership, operations management", timing: "90 days pre-opening" },
                      { role: "Nurse Practitioners", count: 3, responsibilities: "Treatment delivery, injections, IV therapy, stem cell procedures", timing: "60 days pre-opening" },
                      { role: "Rad Techs", count: 3, responsibilities: "MRI/CT imaging, DEXA scans, X-ray, diagnostic imaging support", timing: "60 days pre-opening" },
                      { role: "Medical Assistant", count: 1, responsibilities: "Patient intake, vitals, procedure support, lab coordination", timing: "30 days pre-opening" },
                      { role: "Hospitality Manager", count: 1, responsibilities: "Member experience, facility presentation, service excellence", timing: "60 days pre-opening" },
                      { role: "Concierge", count: 3, responsibilities: "Scheduling, member communications, front desk operations", timing: "30 days pre-opening" }
                    ].map((item, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="p-4 font-medium">{item.role}</td>
                        <td className="p-4 text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-mono text-sm">
                            {item.count}
                          </span>
                        </td>
                        <td className="p-4 text-muted-foreground">{item.responsibilities}</td>
                        <td className="p-4 text-center font-mono text-xs text-muted-foreground">{item.timing}</td>
                        <td className="p-4 text-center font-mono text-xs text-primary">{item.salary || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 flex justify-center">
                <div className="bg-primary/10 border border-primary/30 rounded-xl px-6 py-3 flex items-center gap-4">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-body text-sm">
                    <span className="font-medium text-foreground">14 staff</span>
                    <span className="text-muted-foreground"> for Center Operations Team</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* ELITE Membership Team */}
            <motion.div variants={fadeInUp}>
              <div className="bg-card border border-amber-500/30 rounded-2xl p-6 mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <h3 className="font-display text-xl font-medium">ELITE Membership Team</h3>
                  <span className="ml-auto text-xs bg-amber-500/20 text-amber-500 px-2 py-1 rounded">Minimum 3 Teams per Center</span>
                </div>
                <p className="text-sm text-muted-foreground ml-6">
                  Every new center opens with a <span className="text-foreground font-medium">minimum of 3 physician-led ELITE teams</span> to spread new members out consistently. 
                  This number may increase based on pre-sales volume. ELITE Physicians are linked to the center where member testing was completed, 
                  working under the supervision of the center's Medical Director.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border bg-muted/30">
                      <th className="text-left p-4 font-display font-medium">Role</th>
                      <th className="text-center p-4 font-display font-medium">Per Team</th>
                      <th className="text-center p-4 font-display font-medium">At Launch (3 Teams)</th>
                      <th className="text-left p-4 font-display font-medium">Key Responsibilities</th>
                      <th className="text-center p-4 font-display font-medium">Base Salary</th>
                    </tr>
                  </thead>
                  <tbody className="font-body text-sm">
                    {[
                      { role: "Physician", perTeam: 1, atLaunch: 3, responsibilities: "Ongoing member care under Medical Director supervision, health optimization, treatment planning", salary: "$300K" },
                      { role: "Medical Assistant", perTeam: 1, atLaunch: 3, responsibilities: "Physician support, care coordination, member follow-up" },
                      { role: "Care Coordinator", perTeam: 2, atLaunch: 6, responsibilities: "Member relationship management, scheduling, care navigation (60 members each)" }
                    ].map((item, i) => (
                      <tr key={i} className="border-b border-border/50 last:border-0">
                        <td className="p-4 font-medium">{item.role}</td>
                        <td className="p-4 text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-amber-500/10 text-amber-500 font-mono text-sm">
                            {item.perTeam}
                          </span>
                        </td>
                        <td className="p-4 text-center">
                          <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary font-mono text-sm">
                            {item.atLaunch}
                          </span>
                        </td>
                        <td className="p-4 text-muted-foreground">{item.responsibilities}</td>
                        <td className="p-4 text-center font-mono text-xs text-primary">{item.salary || '—'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              
              <div className="mt-6 flex flex-col md:flex-row justify-center gap-4">
                <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl px-6 py-3 flex items-center gap-4">
                  <Users className="w-5 h-5 text-amber-500" />
                  <span className="font-body text-sm">
                    <span className="font-medium text-foreground">4 staff per ELITE team</span>
                    <span className="text-muted-foreground"> (120 members max)</span>
                  </span>
                </div>
                <div className="bg-primary/10 border border-primary/30 rounded-xl px-6 py-3 flex items-center gap-4">
                  <Users className="w-5 h-5 text-primary" />
                  <span className="font-body text-sm">
                    <span className="font-medium text-foreground">Minimum 12 ELITE staff</span>
                    <span className="text-muted-foreground"> (3+ teams per center)</span>
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Combined Summary */}
            <motion.div variants={fadeInUp} className="mt-12 bg-gradient-to-r from-primary/10 to-amber-500/10 rounded-2xl p-6">
              <h4 className="font-display font-medium text-center mb-6">Center Staffing (Per Location)</h4>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <span className="font-mono text-3xl text-primary">14</span>
                  <p className="text-sm text-muted-foreground mt-1">Center Operations Team</p>
                  <p className="text-xs text-muted-foreground">Fixed per center</p>
                </div>
                <div>
                  <span className="font-mono text-3xl text-amber-500">12+</span>
                  <p className="text-sm text-muted-foreground mt-1">ELITE Teams (min. 3)</p>
                  <p className="text-xs text-muted-foreground">May increase with pre-sales</p>
                </div>
                <div>
                  <span className="font-mono text-3xl text-foreground">26+</span>
                  <p className="text-sm text-muted-foreground mt-1">Minimum Headcount</p>
                  <p className="text-xs text-muted-foreground">14 ops + 12 ELITE staff</p>
                </div>
              </div>
            </motion.div>

            {/* MBO Opportunity */}
            <motion.div variants={fadeInUp} className="mt-12 bg-card border border-primary/30 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                  <span className="text-primary font-bold">%</span>
                </div>
                <div>
                  <h4 className="font-display font-medium">Performance-Based Compensation</h4>
                  <p className="text-sm text-muted-foreground">30% MBO Opportunity</p>
                </div>
              </div>
              <p className="font-body text-sm text-muted-foreground mb-4">
                In addition to base salary, eligible team members can earn up to <span className="text-primary font-medium">30% of their base compensation</span> through 
                Management by Objectives (MBO) bonuses tied to annual performance metrics.
              </p>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-muted/30 rounded-xl p-4">
                  <h5 className="font-display text-sm font-medium mb-2">Eligible Roles</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• C-Suite Executives</li>
                    <li>• Management Team</li>
                    <li>• Physicians (MD, ELITE)</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-4">
                  <h5 className="font-display text-sm font-medium mb-2">Metrics Framework</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• 3 metrics defined annually</li>
                    <li>• Individual + company goals</li>
                    <li>• Reviewed quarterly</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-4">
                  <h5 className="font-display text-sm font-medium mb-2">Example: Physician</h5>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    <li>• Base: $300K</li>
                    <li>• MBO (30%): +$90K</li>
                    <li>• Total OTE: $390K</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Corporate Support Functions */}
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
                CORPORATE SUPPORT
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Management Company Team
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Corporate functions to support center operations and network growth
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  department: "Finance & Accounting",
                  roles: ["Controller", "Staff Accountant", "AP/AR Specialist"],
                  headcount: 3,
                  timing: "TBD"
                },
                {
                  department: "Human Resources",
                  roles: ["HR Director", "Recruiter", "Benefits Administrator"],
                  headcount: 3,
                  timing: "TBD"
                },
                {
                  department: "Marketing & Growth",
                  roles: ["Digital Marketing Manager", "Content Creator", "Event Support Manager"],
                  headcount: 3,
                  timing: "TBD"
                },
                {
                  department: "Technology",
                  roles: ["Platform Engineer", "Data Analyst", "IT Support", "Business Intelligence", "Member Platform Trainer"],
                  headcount: 5,
                  timing: "TBD"
                },
                {
                  department: "Clinical Operations",
                  roles: ["VP of Operations", "Director Care Coordination", "Medical Assistant Manager", "Director of Operations"],
                  headcount: 4,
                  timing: "TBD"
                },
                {
                  department: "Product & Operations",
                  roles: ["VP of Project Management", "Procurement Manager"],
                  headcount: 2,
                  timing: "TBD",
                  reportsTo: "CPO"
                }
              ].map((dept, i) => (
                <motion.div 
                  key={i}
                  variants={scaleIn}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
                >
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="font-display text-lg font-medium">{dept.department}</h3>
                    <span className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary">
                      {dept.headcount} roles
                    </span>
                  </div>
                  <div className="space-y-2 mb-4">
                    {dept.roles.map((role, j) => (
                      <div key={j} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                        <span>{role}</span>
                      </div>
                    ))}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <span className="text-xs font-mono text-muted-foreground">Target: {dept.timing}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 flex justify-center">
              <div className="bg-muted/30 rounded-xl px-6 py-3 flex items-center gap-4">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="font-body text-sm">
<span className="font-medium text-foreground">20 corporate roles</span>
                  <span className="text-muted-foreground"> across 6 departments</span>
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Key Hires Summary Card */}
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
                HEADCOUNT SUMMARY
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Total Team Build
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Complete staffing plan from launch through scale
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="bg-gradient-to-br from-card to-card/50 border border-border rounded-2xl p-8">
              <div className="grid md:grid-cols-5 gap-4 mb-8">
                {[
                  { count: 5, label: "Phase 1 Executives", description: "CEO, CFO, COO, CPO, CLO", color: "destructive" },
                  { count: 14, label: "Center Ops Team", description: "Fixed per center", color: "primary" },
                  { count: 12, label: "ELITE Teams", description: "3 teams at launch", color: "amber-500" },
                  { count: 20, label: "Corporate Roles", description: "6 departments", color: "primary" },
                  { count: 4, label: "Phase 2 Executives", description: "CMO, CCO, CMO, CTO", color: "amber-500" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-background/50 rounded-xl border border-border/50">
                    <span 
                      className="font-mono text-3xl font-bold"
                      style={{ color: item.color === 'destructive' ? 'hsl(var(--destructive))' : item.color === 'amber-500' ? '#f59e0b' : 'hsl(var(--primary))' }}
                    >
                      {item.count}
                    </span>
                    <h4 className="font-display font-medium text-sm mt-2">{item.label}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                      <span className="font-mono text-2xl font-bold text-primary">55</span>
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium">Total Headcount</h3>
                      <p className="text-sm text-muted-foreground">Full team at launch (single center, 3 ELITE teams)</p>
                    </div>
                  </div>
                  <div className="text-center md:text-right">
                    <p className="text-sm text-muted-foreground">Additional ELITE teams add</p>
                    <span className="font-mono text-lg text-amber-500">+4 staff per 120 members</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Hiring Timeline Summary */}
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
                HIRING ROADMAP
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Team Build Timeline
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-4">
              {[
                { phase: "Pre-Launch", label: "Phase 1 Critical", count: "5 executives", color: "destructive", description: "CEO, CFO, COO, CPO, CLO" },
                { phase: "Center Opening", label: "Center Ops Team", count: "14 staff", color: "primary", description: "Medical Director, Physician, Center Director, NPs, Rad Techs, MA, Hospitality, Concierge" },
                { phase: "Center Opening", label: "ELITE Teams", count: "12 staff (3 teams)", color: "amber-500", description: "3 Physicians, 3 MAs, 6 Care Coordinators (opens with capacity for 360 members)" },
                { phase: "Post-Launch", label: "Corporate Build", count: "20 roles", color: "primary", description: "Finance, HR, Marketing, Technology, Clinical Ops, Product" },
                { phase: "As Needed", label: "Phase 2 Executives", count: "4 executives", color: "amber-500", description: "CMO (Medical), CCO, CMO (Marketing), CTO" }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 p-4 bg-card border border-border rounded-xl">
                  <div className="w-28 shrink-0">
                    <span className="font-mono text-sm text-muted-foreground">{item.phase}</span>
                  </div>
                  <div className={`w-3 h-3 rounded-full bg-${item.color}`} style={{ backgroundColor: item.color === 'destructive' ? 'hsl(var(--destructive))' : item.color === 'amber-500' ? '#f59e0b' : 'hsl(var(--primary))' }} />
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <span className="font-display font-medium">{item.label}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-muted text-muted-foreground">{item.count}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 bg-muted/30 rounded-xl p-4">
              <p className="font-body text-sm text-muted-foreground text-center">
                <span className="text-foreground font-medium">Note:</span> Hiring timelines are dependent on center opening schedules and operational needs. 
                Specific dates will be determined based on funding milestones and real estate availability.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Center Opening Checklist */}
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
                LAUNCH PREPARATION
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Center Opening Checklist
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                90/60/30-day pre-opening milestones and staffing triggers for each new center
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
              {/* 90 Days */}
              <div className="bg-card border border-destructive/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center">
                    <span className="font-mono text-lg font-bold text-destructive">90</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium">Days Before Opening</h3>
                    <p className="text-xs text-muted-foreground">Critical Foundation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-display text-sm font-medium mb-2 text-destructive">Staffing</h4>
                    <ul className="space-y-2">
                      {["Medical Director hired", "Center Director hired", "Operations Manager onboarded"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-medium mb-2 text-destructive">Operations</h4>
                    <ul className="space-y-2">
                      {["Facility buildout 75% complete", "Equipment orders finalized", "Vendor contracts signed", "IT infrastructure installed"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-medium mb-2 text-destructive">Compliance</h4>
                    <ul className="space-y-2">
                      {["State licenses submitted", "HIPAA policies finalized", "Insurance credentialing started"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 60 Days */}
              <div className="bg-card border border-amber-500/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-amber-500/20 flex items-center justify-center">
                    <span className="font-mono text-lg font-bold text-amber-500">60</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium">Days Before Opening</h3>
                    <p className="text-xs text-muted-foreground">Clinical Readiness</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-display text-sm font-medium mb-2 text-amber-500">Staffing</h4>
                    <ul className="space-y-2">
                      {["Physician hired", "3 Nurse Practitioners hired", "3 Rad Techs hired", "3 ELITE Physicians recruited"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-medium mb-2 text-amber-500">Operations</h4>
                    <ul className="space-y-2">
                      {["Facility buildout complete", "Equipment installed & tested", "EMR system configured", "Protocols documented"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-medium mb-2 text-amber-500">Training</h4>
                    <ul className="space-y-2">
                      {["Clinical training program started", "Service excellence training", "GeneMetrics™ certification"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* 30 Days */}
              <div className="bg-card border border-primary/30 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="font-mono text-lg font-bold text-primary">30</span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium">Days Before Opening</h3>
                    <p className="text-xs text-muted-foreground">Final Preparation</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-display text-sm font-medium mb-2 text-primary">Staffing</h4>
                    <ul className="space-y-2">
                      {["Medical Assistant hired", "Hospitality Manager hired", "3 Concierge staff hired", "3 ELITE MAs hired", "6 ELITE Care Coordinators hired"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-medium mb-2 text-primary">Operations</h4>
                    <ul className="space-y-2">
                      {["Soft opening & testing", "Member portal live", "Scheduling system active", "Supply chain verified"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-display text-sm font-medium mb-2 text-primary">Launch</h4>
                    <ul className="space-y-2">
                      {["Marketing campaign active", "First members scheduled", "VIP preview events", "Grand opening planned"].map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <span className="font-mono text-2xl text-destructive">3</span>
                  <p className="text-sm text-muted-foreground mt-1">Key Hires at 90 Days</p>
                </div>
                <div>
                  <span className="font-mono text-2xl text-amber-500">11</span>
                  <p className="text-sm text-muted-foreground mt-1">Clinical Staff at 60 Days</p>
                </div>
                <div>
                  <span className="font-mono text-2xl text-primary">14</span>
                  <p className="text-sm text-muted-foreground mt-1">Final Hires at 30 Days</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Equity Allocation */}
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
                EQUITY COMPENSATION
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                12% Total Equity Pool
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic equity allocation to attract and retain world-class talent. 
                Individual allocations to be determined based on candidate experience and market conditions.
              </p>
            </motion.div>

            {/* Vesting Structure Callout */}
            <motion.div variants={fadeInUp} className="mb-8 bg-accent/10 border border-accent/30 rounded-2xl p-6">
              <h4 className="font-display font-medium mb-4 text-center">Vesting Structure</h4>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-center">
                  <span className="font-mono text-2xl text-accent">CEO</span>
                  <p className="text-sm text-muted-foreground mt-1">Immediate vesting upon hire</p>
                  <p className="text-xs text-muted-foreground">(Founder-equivalent treatment)</p>
                </div>
                <div className="text-center">
                  <span className="font-mono text-2xl text-primary">Other C-Suite</span>
                  <p className="text-sm text-muted-foreground mt-1">4-year vesting with 1-year cliff</p>
                  <p className="text-xs text-muted-foreground">(CFO, COO, CPO, CLO, CMO, CCO, CTO)</p>
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-xl font-medium mb-6">Phase 1 Executives</h3>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Equity allocations for Phase 1 executives (CEO, CFO, COO, CPO, CLO) will be determined through negotiation based on candidate qualifications and market benchmarks.
                </p>
                <div className="space-y-3">
                  {["CEO", "CFO", "COO", "CPO", "CLO"].map((role, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-foreground">{role}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                        {role === "CEO" ? "Immediate Vesting" : "4-Year Vesting"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-xl font-medium mb-6">Phase 2 Executives</h3>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Additional executive equity will be allocated as Phase 2 roles are filled, with a reserve pool maintained for future hires.
                </p>
                <div className="space-y-3">
                  {["CMO (Medical)", "CCO", "CMO (Marketing)", "CTO", "Future Hires Pool"].map((role, i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border/50 last:border-0">
                      <span className="font-body text-foreground">{role}</span>
                      <span className="text-xs px-2 py-0.5 rounded bg-muted text-muted-foreground">
                        {role === "Future Hires Pool" ? "Reserved" : "4-Year Vesting"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-6">
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <span className="font-mono text-3xl text-primary">12.00%</span>
                  <p className="text-sm text-muted-foreground mt-1">Total Equity Pool</p>
                </div>
                <div>
                  <span className="font-mono text-3xl text-foreground">$24M</span>
                  <p className="text-sm text-muted-foreground mt-1">Value at $200M Post-Money</p>
                </div>
                <div>
                  <span className="font-mono text-3xl text-accent">4-Year</span>
                  <p className="text-sm text-muted-foreground mt-1">Standard Vesting (excl. CEO)</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Multi-Center Scaling Model */}
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
                SCALING STRATEGY
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Multi-Center Staffing Model
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                How the team scales as we expand from 1 to 10 centers
              </p>
            </motion.div>

            {/* ELITE Team Scaling Detail */}
            <motion.div variants={fadeInUp} className="mb-12 bg-amber-500/10 border border-amber-500/30 rounded-2xl p-8">
              <h3 className="font-display text-xl font-medium mb-6 text-center">ELITE Membership Team Scaling</h3>
              <p className="font-body text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
                ELITE membership care teams scale independently from Center Operations. Each team manages up to 120 members 
                with dedicated physician oversight and personalized care coordination. ELITE Physicians are linked to the center 
                where member testing was completed, working under the supervision of the center's Medical Director.
              </p>
              
              {/* Key Metrics */}
              <div className="grid md:grid-cols-6 gap-4 mb-8">
                {[
                  { metric: "3", label: "Teams at Launch", description: "Per center" },
                  { metric: "120", label: "Members per Team", description: "Maximum capacity" },
                  { metric: "15", label: "New Members/Month", description: "Per physician limit" },
                  { metric: "50%", label: "Capacity Trigger", description: "Add new team" },
                  { metric: "60", label: "Members per Coordinator", description: "2 coordinators per team" },
                  { metric: "4", label: "Staff per Team", description: "Physician, MA, 2 Coordinators" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-background/50 rounded-xl">
                    <span className="font-mono text-3xl text-amber-500">{item.metric}</span>
                    <h4 className="font-display font-medium mt-2 text-sm">{item.label}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>

              {/* Onboarding & Scaling Rules */}
              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-display font-medium mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-amber-500" />
                    Physician Onboarding Limits
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span className="text-muted-foreground">Each physician limited to <span className="text-foreground font-medium">15 new members per month</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span className="text-muted-foreground">Ensures quality onboarding and relationship building</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                      <span className="text-muted-foreground">~8 months to reach full panel capacity of 120</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-card border border-border rounded-xl p-6">
                  <h4 className="font-display font-medium mb-4 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    New Team Trigger
                  </h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">New ELITE team added when existing physician panel reaches <span className="text-foreground font-medium">50% capacity (60 members)</span></span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">Ensures seamless capacity for new member growth</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-muted-foreground">Proactive hiring prevents waitlists and delays</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Scaling Visual - Horizontal Timeline */}
              <div className="bg-card border border-border rounded-xl p-6">
                <h4 className="font-display font-medium mb-6 text-center">ELITE Team Scaling Triggers</h4>
                
                {/* Visual Timeline */}
                <div className="relative">
                  {/* Progress Bar Background */}
                  <div className="absolute top-8 left-0 right-0 h-2 bg-muted/50 rounded-full" />
                  
                  {/* Milestone Points */}
                  <div className="relative flex justify-between">
                    {[
                      { members: "1-60", teams: 1, maxMembers: 60, months: 4, capacityPct: 3.4 },
                      { members: "61-120", teams: 2, maxMembers: 120, months: 8, capacityPct: 6.9 },
                      { members: "121-180", teams: 3, maxMembers: 180, months: 12, capacityPct: 10.3 },
                      { members: "181-240", teams: 4, maxMembers: 240, months: 16, capacityPct: 13.7 }
                    ].map((item, i) => (
                      <div key={i} className="flex flex-col items-center" style={{ width: '25%' }}>
                        {/* Team Count Badge */}
                        <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-2 ${i === 0 ? 'bg-amber-500 text-amber-950' : 'bg-card border-2 border-amber-500/50'}`}>
                          <div className="text-center">
                            <span className={`font-mono text-xl font-bold ${i === 0 ? '' : 'text-amber-500'}`}>{item.teams}</span>
                            <p className={`text-[9px] ${i === 0 ? 'text-amber-950/70' : 'text-muted-foreground'}`}>team{item.teams > 1 ? 's' : ''}</p>
                          </div>
                        </div>
                        
                        {/* Member Range */}
                        <div className="text-center mt-4">
                          <span className="font-mono text-sm text-amber-500 font-medium">{item.members}</span>
                          <p className="text-[10px] text-muted-foreground">members</p>
                        </div>
                        
                        {/* Staff Count */}
                        <div className="mt-2 px-3 py-1 bg-primary/10 rounded-full">
                          <span className="font-mono text-xs text-primary">{item.teams * 4} staff</span>
                        </div>
                        
                        {/* Time to Scale */}
                        <div className="mt-2 text-center">
                          <span className="font-mono text-[10px] text-muted-foreground">~{item.months} mo</span>
                        </div>
                        
                        {/* Capacity Utilization */}
                        <div className="mt-1">
                          <span className="font-mono text-[10px] text-emerald-400">{item.capacityPct}% capacity</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Time & Capacity Explanation */}
                <div className="mt-8 pt-6 border-t border-border/50">
                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted/20 rounded-lg p-4">
                      <h5 className="font-display text-sm font-medium mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-amber-500" />
                        Time to Scale
                      </h5>
                      <p className="font-body text-xs text-muted-foreground">
                        Based on <span className="text-foreground">15 new members/month</span> per physician onboarding limit. 
                        Each team reaches 50% capacity (60 members) in ~4 months, triggering the next team hire.
                      </p>
                    </div>
                    <div className="bg-muted/20 rounded-lg p-4">
                      <h5 className="font-display text-sm font-medium mb-2 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-400" />
                        Capacity Utilization
                      </h5>
                      <p className="font-body text-xs text-muted-foreground">
                        Percentage of max diagnostic capacity (<span className="text-foreground">1,750 members/year</span> at standard hours). 
                        Extended hours increase capacity to 2,250-3,050 members.
                      </p>
                    </div>
                  </div>
                  
                  <p className="font-body text-sm text-muted-foreground text-center">
                    Each center launches with <span className="text-amber-500 font-medium">3 ELITE teams (12 staff)</span> and scales based on 50% capacity triggers
                  </p>
                </div>
              </div>
              
              {/* Cross-Reference to Diagnostic Capacity */}
              <div className="mt-6 bg-gradient-to-r from-primary/10 to-emerald-500/10 border border-primary/30 rounded-xl p-5">
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <Layers className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h5 className="font-display font-medium">Diagnostic Suite Capacity Alignment</h5>
                      <p className="font-body text-sm text-muted-foreground mt-1">
                        ELITE team scaling is aligned with diagnostic imaging throughput. Each center's 6-7 diagnostic suites 
                        can process 1,750-3,050 members annually depending on operating hours.
                      </p>
                    </div>
                  </div>
                  <Link href="/performance#diagnostic-capacity" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg text-primary font-medium text-sm transition-colors whitespace-nowrap">
                    View Capacity Analysis →
                  </Link>
                </div>
              </div>
              
              {/* Visual Capacity Progress Bar */}
              <div className="mt-6 bg-card border border-border rounded-xl p-6">
                <h4 className="font-display font-medium mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Capacity Progress Visualization
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Visual representation of member growth against diagnostic capacity with team trigger points.
                </p>
                
                {/* Progress Bar with Markers */}
                <div className="relative mb-8">
                  {/* Background bar */}
                  <div className="h-8 bg-muted/30 rounded-full overflow-hidden relative">
                    {/* Filled portion based on member count */}
                    <div 
                      className="h-full bg-gradient-to-r from-primary to-emerald-500 transition-all duration-500 rounded-full"
                      style={{ width: `${Math.min((memberCount / currentCapacity) * 100, 100)}%` }}
                    />
                    
                    {/* Team trigger markers */}
                    {[60, 120, 180, 240].map((trigger, i) => {
                      const position = (trigger / currentCapacity) * 100;
                      if (position > 100) return null;
                      return (
                        <div 
                          key={i}
                          className="absolute top-0 bottom-0 w-0.5 bg-amber-500"
                          style={{ left: `${position}%` }}
                        >
                          <div className="absolute -top-6 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <span className="text-[10px] font-mono text-amber-500">Team {i + 1}</span>
                          </div>
                          <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap">
                            <span className="text-[10px] font-mono text-muted-foreground">{trigger}</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                  
                  {/* Current position indicator */}
                  <div 
                    className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-primary shadow-lg transition-all duration-500"
                    style={{ left: `calc(${Math.min((memberCount / currentCapacity) * 100, 100)}% - 8px)` }}
                  />
                </div>
                
                {/* Member Count Slider */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-body text-sm text-muted-foreground">Adjust Member Count</span>
                    <span className="font-mono text-lg text-primary font-bold">{memberCount} members</span>
                  </div>
                  <input 
                    type="range" 
                    min="0" 
                    max="500" 
                    value={memberCount}
                    onChange={(e) => setMemberCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-muted/50 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-primary [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground mt-1">
                    <span>0</span>
                    <span>{currentCapacity} (max)</span>
                  </div>
                </div>
                
                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-muted/20 rounded-lg p-3 text-center">
                    <span className="font-mono text-2xl text-primary font-bold">{utilizationPct}%</span>
                    <p className="text-[10px] text-muted-foreground mt-1">Capacity Used</p>
                  </div>
                  <div className="bg-muted/20 rounded-lg p-3 text-center">
                    <span className="font-mono text-2xl text-amber-500 font-bold">{teamsNeeded}</span>
                    <p className="text-[10px] text-muted-foreground mt-1">Teams Needed</p>
                  </div>
                  <div className="bg-muted/20 rounded-lg p-3 text-center">
                    <span className="font-mono text-2xl text-emerald-400 font-bold">{staffNeeded}</span>
                    <p className="text-[10px] text-muted-foreground mt-1">Total Staff</p>
                  </div>
                </div>
              </div>
              
              {/* Scenario Calculator */}
              <div className="mt-6 bg-card border border-border rounded-xl p-6">
                <h4 className="font-display font-medium mb-4 flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-amber-500" />
                  Operating Hours Scenario Calculator
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  See how extended operating hours affect capacity utilization and team requirements.
                </p>
                
                {/* Scenario Selector */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {Object.entries(scenarios).map(([key, scenario]) => (
                    <button
                      key={key}
                      onClick={() => setSelectedScenario(key as 'standard' | 'extended' | 'weekend')}
                      className={`p-4 rounded-xl border-2 transition-all text-left ${
                        selectedScenario === key 
                          ? 'border-primary bg-primary/10' 
                          : 'border-border hover:border-primary/50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-display font-medium">{scenario.name}</span>
                        {selectedScenario === key && (
                          <div className="w-2 h-2 rounded-full bg-primary" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground mb-2">{scenario.hours}</p>
                      <span className="font-mono text-lg text-primary">{scenario.capacity.toLocaleString()}</span>
                      <span className="text-xs text-muted-foreground ml-1">members/year</span>
                    </button>
                  ))}
                </div>
                
                {/* Comparison Table */}
                <div className="bg-muted/20 rounded-xl p-4">
                  <h5 className="font-display text-sm font-medium mb-4">Utilization Comparison at {memberCount} Members</h5>
                  <div className="space-y-3">
                    {Object.entries(scenarios).map(([key, scenario]) => {
                      const util = ((memberCount / scenario.capacity) * 100).toFixed(1);
                      const isSelected = selectedScenario === key;
                      return (
                        <div key={key} className={`flex items-center gap-4 p-2 rounded-lg ${isSelected ? 'bg-primary/10' : ''}`}>
                          <div className="w-24 shrink-0">
                            <span className={`text-sm ${isSelected ? 'text-primary font-medium' : 'text-muted-foreground'}`}>
                              {scenario.name}
                            </span>
                          </div>
                          <div className="flex-1">
                            <div className="h-2 bg-muted/50 rounded-full overflow-hidden">
                              <div 
                                className={`h-full rounded-full transition-all ${isSelected ? 'bg-primary' : 'bg-muted-foreground/30'}`}
                                style={{ width: `${Math.min(parseFloat(util), 100)}%` }}
                              />
                            </div>
                          </div>
                          <div className="w-16 text-right">
                            <span className={`font-mono text-sm ${isSelected ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                              {util}%
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              
              {/* Staffing Cost Projections */}
              <div className="mt-6 bg-card border border-border rounded-xl p-6">
                <h4 className="font-display font-medium mb-4 flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-emerald-400" />
                  Staffing Cost Projections
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Incremental labor costs at each team scaling tier, linked to the financial model.
                </p>
                
                {/* Cost Breakdown */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h5 className="font-display text-sm font-medium mb-3">Per-Team Cost Structure</h5>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center p-2 bg-muted/20 rounded-lg">
                        <span className="text-sm text-muted-foreground">ELITE Physician (1)</span>
                        <span className="font-mono text-sm">$350,000</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted/20 rounded-lg">
                        <span className="text-sm text-muted-foreground">Medical Assistant (1)</span>
                        <span className="font-mono text-sm">$55,000</span>
                      </div>
                      <div className="flex justify-between items-center p-2 bg-muted/20 rounded-lg">
                        <span className="text-sm text-muted-foreground">Care Coordinators (2)</span>
                        <span className="font-mono text-sm">$130,000</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-primary/10 rounded-lg border border-primary/30">
                        <span className="text-sm font-medium">Total per Team</span>
                        <span className="font-mono text-sm text-primary font-bold">$535,000</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="font-display text-sm font-medium mb-3">Current Projection ({memberCount} members)</h5>
                    <div className="bg-gradient-to-br from-primary/10 to-emerald-500/10 border border-primary/30 rounded-xl p-4">
                      <div className="text-center mb-4">
                        <span className="font-mono text-3xl text-primary font-bold">
                          ${(totalStaffCost / 1000000).toFixed(2)}M
                        </span>
                        <p className="text-xs text-muted-foreground mt-1">Annual ELITE Team Labor Cost</p>
                      </div>
                      <div className="grid grid-cols-2 gap-3 text-center">
                        <div className="bg-background/50 rounded-lg p-2">
                          <span className="font-mono text-lg text-amber-500">{teamsNeeded}</span>
                          <p className="text-[10px] text-muted-foreground">Teams</p>
                        </div>
                        <div className="bg-background/50 rounded-lg p-2">
                          <span className="font-mono text-lg text-emerald-400">{staffNeeded}</span>
                          <p className="text-[10px] text-muted-foreground">Staff</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Scaling Cost Table */}
                <div className="bg-muted/20 rounded-xl overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left p-3 font-display font-medium">Members</th>
                        <th className="text-center p-3 font-display font-medium">Teams</th>
                        <th className="text-center p-3 font-display font-medium">Staff</th>
                        <th className="text-right p-3 font-display font-medium">Annual Cost</th>
                        <th className="text-right p-3 font-display font-medium">Incremental</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        { members: '1-120', teams: 1, staff: 4, cost: 535000, increment: 535000 },
                        { members: '121-240', teams: 2, staff: 8, cost: 1070000, increment: 535000 },
                        { members: '241-360', teams: 3, staff: 12, cost: 1605000, increment: 535000 },
                        { members: '361-480', teams: 4, staff: 16, cost: 2140000, increment: 535000 },
                        { members: '481-600', teams: 5, staff: 20, cost: 2675000, increment: 535000 }
                      ].map((row, i) => (
                        <tr key={i} className={`border-b border-border/50 ${teamsNeeded === row.teams ? 'bg-primary/10' : ''}`}>
                          <td className="p-3 font-mono text-amber-500">{row.members}</td>
                          <td className="p-3 text-center">{row.teams}</td>
                          <td className="p-3 text-center">{row.staff}</td>
                          <td className="p-3 text-right font-mono">${(row.cost / 1000).toFixed(0)}K</td>
                          <td className="p-3 text-right font-mono text-emerald-400">+${(row.increment / 1000).toFixed(0)}K</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                
                {/* Link to Financial Model */}
                <div className="mt-4 flex items-center justify-between p-4 bg-muted/20 rounded-lg">
                  <p className="font-body text-sm text-muted-foreground">
                    These costs are incorporated into the single-center proforma and multi-center projections.
                  </p>
                  <Link href="/performance" className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 hover:bg-primary/30 rounded-lg text-primary font-medium text-sm transition-colors whitespace-nowrap">
                    View Unit Economics →
                  </Link>
                </div>
              </div>
              
              {/* Break-Even Analysis */}
              <div className="mt-6 bg-card border border-border rounded-xl p-6">
                <h4 className="font-display font-medium mb-4 flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-emerald-400" />
                  Break-Even Analysis
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Calculate when ELITE team revenue covers staffing costs. Based on $60K annual membership with 85% allocated to ELITE services.
                </p>
                
                {/* Break-Even Visualization */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div className="bg-muted/20 rounded-xl p-5">
                    <h5 className="font-display text-sm font-medium mb-4">Per-Team Break-Even</h5>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Team Cost</span>
                        <span className="font-mono text-lg">$535,000</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Revenue per Member</span>
                        <span className="font-mono text-lg">$51,000</span>
                      </div>
                      <div className="h-px bg-border" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Break-Even Members</span>
                        <span className="font-mono text-xl text-amber-500 font-bold">{breakEvenMembers}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Each team needs {breakEvenMembers} members to cover costs. Max capacity is 120 members/team.
                      </p>
                    </div>
                  </div>
                  
                  <div className="bg-gradient-to-br from-emerald-500/10 to-primary/10 border border-emerald-500/30 rounded-xl p-5">
                    <h5 className="font-display text-sm font-medium mb-4">Current Projection ({memberCount} members)</h5>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">ELITE Revenue</span>
                        <span className="font-mono text-lg text-emerald-400">${(currentRevenue / 1000000).toFixed(2)}M</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Staffing Cost</span>
                        <span className="font-mono text-lg text-red-400">-${(totalStaffCost / 1000000).toFixed(2)}M</span>
                      </div>
                      <div className="h-px bg-border" />
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">Net Margin</span>
                        <span className={`font-mono text-xl font-bold ${profitMargin >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                          {profitMargin >= 0 ? '+' : ''}${(profitMargin / 1000000).toFixed(2)}M
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Margin per Member</span>
                        <span className={`font-mono ${marginPerMember >= 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                          {marginPerMember >= 0 ? '+' : ''}${marginPerMember.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Break-Even Progress Bar */}
                <div className="bg-muted/20 rounded-xl p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium">Progress to Full Profitability</span>
                    <span className="font-mono text-sm text-muted-foreground">
                      {memberCount} / {teamsNeeded * 120} members ({teamsNeeded} team{teamsNeeded > 1 ? 's' : ''} at capacity)
                    </span>
                  </div>
                  <div className="h-4 bg-muted/50 rounded-full overflow-hidden relative">
                    {/* Break-even threshold marker */}
                    <div 
                      className="absolute top-0 bottom-0 w-0.5 bg-amber-500 z-10"
                      style={{ left: `${(breakEvenMembers * teamsNeeded / (teamsNeeded * 120)) * 100}%` }}
                    />
                    {/* Current progress */}
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${profitMargin >= 0 ? 'bg-gradient-to-r from-emerald-500 to-primary' : 'bg-gradient-to-r from-red-500 to-amber-500'}`}
                      style={{ width: `${Math.min((memberCount / (teamsNeeded * 120)) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono text-muted-foreground mt-1">
                    <span>0</span>
                    <span className="text-amber-500">Break-even ({breakEvenMembers * teamsNeeded})</span>
                    <span>Full capacity ({teamsNeeded * 120})</span>
                  </div>
                </div>
              </div>
              
              {/* Multi-Center Aggregation Calculator */}
              <div className="mt-6 bg-card border border-border rounded-xl p-6">
                <h4 className="font-display font-medium mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-primary" />
                  Multi-Center Staffing Aggregation
                </h4>
                <p className="font-body text-sm text-muted-foreground mb-6">
                  Calculate total staffing costs across multiple centers. Each center launches with 3 ELITE teams.
                </p>
                
                {/* Center Count Selector */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="font-body text-sm text-muted-foreground">Number of Centers:</span>
                  <div className="flex gap-2">
                    {[1, 3, 5, 10].map((count) => (
                      <button
                        key={count}
                        onClick={() => setCenterCount(count)}
                        className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                          centerCount === count 
                            ? 'bg-primary text-primary-foreground' 
                            : 'bg-muted/30 hover:bg-muted/50'
                        }`}
                      >
                        {count}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Aggregated Stats */}
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  <div className="bg-muted/20 rounded-xl p-4 text-center">
                    <span className="font-mono text-3xl text-primary font-bold">{totalHeadcount}</span>
                    <p className="text-xs text-muted-foreground mt-1">Total Headcount</p>
                  </div>
                  <div className="bg-muted/20 rounded-xl p-4 text-center">
                    <span className="font-mono text-3xl text-amber-500 font-bold">{centerCount * eliteTeamsPerCenter}</span>
                    <p className="text-xs text-muted-foreground mt-1">ELITE Teams</p>
                  </div>
                  <div className="bg-muted/20 rounded-xl p-4 text-center">
                    <span className="font-mono text-3xl text-emerald-400 font-bold">{totalEliteStaff}</span>
                    <p className="text-xs text-muted-foreground mt-1">ELITE Staff</p>
                  </div>
                  <div className="bg-muted/20 rounded-xl p-4 text-center">
                    <span className="font-mono text-3xl text-primary font-bold">${(totalMultiCenterCost / 1000000).toFixed(1)}M</span>
                    <p className="text-xs text-muted-foreground mt-1">Annual Labor Cost</p>
                  </div>
                </div>
                
                {/* Cost Breakdown Table */}
                <div className="bg-muted/20 rounded-xl overflow-hidden">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border bg-muted/30">
                        <th className="text-left p-3 font-display font-medium">Category</th>
                        <th className="text-center p-3 font-display font-medium">Headcount</th>
                        <th className="text-right p-3 font-display font-medium">Annual Cost</th>
                        <th className="text-right p-3 font-display font-medium">% of Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-border/50">
                        <td className="p-3">Executive Team</td>
                        <td className="p-3 text-center font-mono">{phase1Execs + phase2Execs}</td>
                        <td className="p-3 text-right font-mono">${(execCost / 1000000).toFixed(2)}M</td>
                        <td className="p-3 text-right font-mono text-muted-foreground">{((execCost / totalMultiCenterCost) * 100).toFixed(1)}%</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-3">Corporate Staff</td>
                        <td className="p-3 text-center font-mono">{corporateStaff}</td>
                        <td className="p-3 text-right font-mono">${(corporateCost / 1000000).toFixed(2)}M</td>
                        <td className="p-3 text-right font-mono text-muted-foreground">{((corporateCost / totalMultiCenterCost) * 100).toFixed(1)}%</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="p-3">Center Operations ({centerCount} centers)</td>
                        <td className="p-3 text-center font-mono">{totalCenterOps}</td>
                        <td className="p-3 text-right font-mono">${(totalCenterOpsCost / 1000000).toFixed(2)}M</td>
                        <td className="p-3 text-right font-mono text-muted-foreground">{((totalCenterOpsCost / totalMultiCenterCost) * 100).toFixed(1)}%</td>
                      </tr>
                      <tr className="border-b border-border/50 bg-amber-500/5">
                        <td className="p-3 font-medium">ELITE Teams ({centerCount * eliteTeamsPerCenter} teams)</td>
                        <td className="p-3 text-center font-mono text-amber-500">{totalEliteStaff}</td>
                        <td className="p-3 text-right font-mono text-amber-500">${(totalEliteCost / 1000000).toFixed(2)}M</td>
                        <td className="p-3 text-right font-mono text-amber-500">{((totalEliteCost / totalMultiCenterCost) * 100).toFixed(1)}%</td>
                      </tr>
                      <tr className="bg-primary/10">
                        <td className="p-3 font-bold">Total</td>
                        <td className="p-3 text-center font-mono font-bold">{totalHeadcount}</td>
                        <td className="p-3 text-right font-mono font-bold text-primary">${(totalMultiCenterCost / 1000000).toFixed(2)}M</td>
                        <td className="p-3 text-right font-mono font-bold">100%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                {/* Member Capacity Note */}
                <div className="mt-4 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-lg">
                  <p className="font-body text-sm text-muted-foreground">
                    <span className="text-emerald-400 font-medium">Member Capacity:</span> {centerCount} center{centerCount > 1 ? 's' : ''} with {centerCount * eliteTeamsPerCenter} ELITE teams can support up to <span className="font-mono text-emerald-400 font-bold">{(centerCount * eliteTeamsPerCenter * 120).toLocaleString()}</span> members at full capacity, generating <span className="font-mono text-emerald-400 font-bold">${((centerCount * eliteTeamsPerCenter * 120 * eliteRevenuePerMember) / 1000000).toFixed(1)}M</span> in annual ELITE revenue.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Multi-Center Headcount Table */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left p-4 font-display font-medium">Team Category</th>
                    <th className="text-center p-4 font-display font-medium">1 Center</th>
                    <th className="text-center p-4 font-display font-medium">3 Centers</th>
                    <th className="text-center p-4 font-display font-medium">5 Centers</th>
                    <th className="text-center p-4 font-display font-medium">10 Centers</th>
                  </tr>
                </thead>
                <tbody className="font-body text-sm">
                  {[
                    { category: "Phase 1 Executives", c1: 5, c3: 5, c5: 5, c10: 5, shared: true },
                    { category: "Phase 2 Executives", c1: 0, c3: 2, c5: 4, c10: 4, shared: true },
                    { category: "Corporate Staff", c1: 10, c3: 15, c5: 20, c10: 30, shared: true },
                    { category: "Center Ops Team", c1: 14, c3: 42, c5: 70, c10: 140, shared: false },
                    { category: "ELITE Teams (3 per center at launch)", c1: 12, c3: 36, c5: 60, c10: 120, shared: false }
                  ].map((item, i) => (
                    <tr key={i} className="border-b border-border/50 last:border-0">
                      <td className="p-4">
                        <span className="font-medium">{item.category}</span>
                        {item.shared && <span className="ml-2 text-[10px] px-1.5 py-0.5 rounded bg-primary/10 text-primary">Shared</span>}
                      </td>
                      <td className="p-4 text-center font-mono">{item.c1}</td>
                      <td className="p-4 text-center font-mono">{item.c3}</td>
                      <td className="p-4 text-center font-mono">{item.c5}</td>
                      <td className="p-4 text-center font-mono">{item.c10}</td>
                    </tr>
                  ))}
                  <tr className="bg-muted/30 font-medium">
                    <td className="p-4">Total Headcount</td>
                    <td className="p-4 text-center font-mono text-primary">41</td>
                    <td className="p-4 text-center font-mono text-primary">100</td>
                    <td className="p-4 text-center font-mono text-primary">159</td>
                    <td className="p-4 text-center font-mono text-primary">299</td>
                  </tr>
                </tbody>
              </table>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-8 bg-muted/30 rounded-xl p-4">
              <p className="font-body text-sm text-muted-foreground text-center">
                <span className="text-foreground font-medium">Note:</span> "Shared" roles are centralized at corporate and support all centers. 
                Center Ops Team (14 staff) is fixed per center. Each center opens with 3 ELITE teams (12 staff). Additional teams added at 50% capacity.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Executive Search Partner */}
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
                RECRUITING PARTNER
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Executive Search
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Partnering with industry-leading healthcare executive search firm
              </p>
            </motion.div>

            {/* Search Partner */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <span className="font-mono text-xs text-primary tracking-wider">EXECUTIVE SEARCH PARTNER</span>
                  <h3 className="font-display text-2xl font-medium mt-2 mb-4">Witt/Kieffer</h3>
                  <p className="font-body text-muted-foreground mb-4">
                    Lumastem has selected Witt/Kieffer as our exclusive executive search partner for Phase 1 leadership recruitment. 
                    With over 50 years of experience placing healthcare executives, Witt/Kieffer brings unparalleled expertise in 
                    identifying transformational leaders for innovative healthcare organizations.
                  </p>
                  <div className="space-y-3">
                    {[
                      "Specialized healthcare executive search since 1969",
                      "Deep network of C-suite candidates across health systems, life sciences, and digital health",
                      "Proven track record with physician-led organizations and luxury wellness brands",
                      "Comprehensive assessment methodology including leadership competency evaluation"
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                  <a 
                    href="https://wittkieffer.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 text-primary hover:text-primary/80 transition-colors"
                  >
                    <span className="font-mono text-sm">wittkieffer.com</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                <div className="w-full md:w-64 shrink-0">
                  <div className="bg-muted/30 rounded-xl p-6 text-center">
                    <span className="font-mono text-4xl text-primary">50+</span>
                    <p className="text-sm text-muted-foreground mt-2">Years of Healthcare Executive Search</p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-6 text-center mt-4">
                    <span className="font-mono text-4xl text-accent">3,000+</span>
                    <p className="text-sm text-muted-foreground mt-2">Healthcare Leaders Placed</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Board Composition */}
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
                GOVERNANCE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4">
                Board Composition
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
                Strategic governance structure designed to guide Lumastem through rapid growth. 
                <span className="text-foreground font-medium">The board will never exceed 5 members</span> to maintain agility and decisive leadership.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Current Board */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-xl font-medium mb-6">Initial Board Structure</h3>
                <div className="space-y-4">
                  {[
                    { seat: "Founder/CEO", holder: "Executive Chairman", description: "Strategic vision and operational leadership" },
                    { seat: "Lead Investor", holder: "Series A Lead", description: "Capital strategy and growth oversight" },
                    { seat: "Independent", holder: "Healthcare Industry Expert", description: "Clinical and regulatory guidance" }
                  ].map((item, i) => (
                    <div key={i} className="p-4 bg-muted/30 rounded-xl">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-xs text-primary">{item.seat}</span>
                      </div>
                      <h4 className="font-display font-medium">{item.holder}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Initial Board Size</span>
                    <span className="font-mono text-primary">3 seats</span>
                  </div>
                </div>
              </div>

              {/* Expanded Board */}
              <div className="bg-card border border-amber-500/30 rounded-2xl p-8">
                <h3 className="font-display text-xl font-medium mb-6">Expanded Board (Post-Series A)</h3>
                <div className="space-y-4">
                  {[
                    { seat: "Founder/CEO", holder: "Executive Chairman", status: "existing" },
                    { seat: "Series A Lead", holder: "Investor Director", status: "existing" },
                    { seat: "Series A Co-Lead", holder: "Investor Director", status: "new" },
                    { seat: "Independent", holder: "Healthcare Industry Expert", status: "existing" },
                    { seat: "Independent", holder: "Luxury/Hospitality Expert", status: "new" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                      <div>
                        <span className="font-mono text-xs text-muted-foreground">{item.seat}</span>
                        <h4 className="font-display font-medium text-sm">{item.holder}</h4>
                      </div>
                      <span className={`text-xs px-2 py-1 rounded ${item.status === 'new' ? 'bg-amber-500/20 text-amber-500' : 'bg-muted text-muted-foreground'}`}>
                        {item.status === 'new' ? 'New' : 'Existing'}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-4 border-t border-border">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Maximum Board Size</span>
                    <span className="font-mono text-amber-500">5 seats (cap)</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Board Committees */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-medium mb-6 text-center">Board Committees</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    name: "Audit Committee",
                    chair: "Independent Director",
                    responsibilities: ["Financial reporting oversight", "Internal controls", "External auditor relationship", "Risk management"]
                  },
                  {
                    name: "Compensation Committee",
                    chair: "Investor Director",
                    responsibilities: ["Executive compensation", "Equity plan administration", "Performance metrics", "Succession planning"]
                  },
                  {
                    name: "Governance Committee",
                    chair: "Independent Director",
                    responsibilities: ["Board composition", "Director nominations", "Corporate governance", "ESG oversight"]
                  }
                ].map((committee, i) => (
                  <div key={i} className="p-6 bg-muted/30 rounded-xl">
                    <h4 className="font-display font-medium mb-2">{committee.name}</h4>
                    <p className="text-xs text-muted-foreground mb-4">Chair: {committee.chair}</p>
                    <div className="space-y-2">
                      {committee.responsibilities.map((resp, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <div className="w-1 h-1 rounded-full bg-primary" />
                          <span className="text-xs text-muted-foreground">{resp}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Investor Rights */}
            <motion.div variants={fadeInUp} className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-6">
                <h4 className="font-display font-medium mb-4">Investor Board Rights</h4>
                <div className="space-y-3">
                  {[
                    "Series A lead receives 1 board seat",
                    "Board observer rights for co-investors ($5M+)",
                    "Information rights (monthly financials, quarterly board deck)",
                    "Pro-rata participation rights in future rounds"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-accent/10 border border-accent/30 rounded-xl p-6">
                <h4 className="font-display font-medium mb-4">Protective Provisions</h4>
                <div className="space-y-3">
                  {[
                    "Approval required for equity issuances above threshold",
                    "Consent for material acquisitions or divestitures",
                    "Approval for debt above agreed limits",
                    "Consent for changes to charter or bylaws"
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 shrink-0" />
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* D&O Insurance */}
            <motion.div variants={fadeInUp} className="mt-8 bg-card border border-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-medium mb-6 text-center">Directors & Officers Insurance</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                {[
                  { metric: "$5M", label: "Coverage Limit", description: "Primary D&O policy" },
                  { metric: "$10M", label: "Excess Coverage", description: "Additional protection" },
                  { metric: "A-Rated", label: "Carrier Rating", description: "Financially stable insurer" }
                ].map((item, i) => (
                  <div key={i} className="text-center p-4 bg-muted/30 rounded-xl">
                    <span className="font-mono text-2xl text-primary">{item.metric}</span>
                    <h4 className="font-display font-medium mt-2 text-sm">{item.label}</h4>
                    <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                  </div>
                ))}
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-display font-medium mb-3 text-sm">Coverage Includes</h4>
                  <div className="space-y-2">
                    {[
                      "Defense costs for regulatory investigations",
                      "Securities claims protection",
                      "Employment practices liability",
                      "Fiduciary liability coverage"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="p-4 bg-muted/30 rounded-xl">
                  <h4 className="font-display font-medium mb-3 text-sm">Policy Terms</h4>
                  <div className="space-y-2">
                    {[
                      "Side A coverage for individual directors",
                      "Side B corporate reimbursement",
                      "Side C entity coverage",
                      "Tail coverage for departing directors"
                    ].map((item, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-xs text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 pt-4 border-t border-border text-center">
                <p className="text-sm text-muted-foreground">
                  D&O insurance will be secured prior to Series A closing to protect all board members and officers
                </p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
