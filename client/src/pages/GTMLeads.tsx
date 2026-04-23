/*
 * GTM Lead Flow & CRM Page - WEG Lead Management
 * Based on WEG Master Deck Slides 51-58
 * Matches WEG "Cellular Renaissance" design system
 */

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Mail, Phone, Users, Database, TrendingUp, CheckCircle2, Zap, Target } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Lead Flow" },
  { id: "journey", label: "Lead Journey" },
  { id: "sources", label: "Lead Sources" },
  { id: "crm", label: "CRM & Salesforce" },
  { id: "analytics", label: "Analytics" },
];

export default function GTMLeads() {
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
              LEAD MANAGEMENT
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Lead Flow & CRM
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6"
            />
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground leading-relaxed">
              End-to-end lead journey management — from first touch to conversion, service delivery, 
              and upsell — powered by Salesforce CRM with full funnel visibility.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Lead Journey */}
      <section id="journey" className="py-20 bg-card/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              THE LEAD JOURNEY
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              From Contact to Customer
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured, trackable journey that ensures no lead falls through the cracks.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                step: "01",
                title: "Lead Capture",
                description: "New leads enter the system through multiple channels — website forms, email inquiries, social media, referrals, walk-ins, and phone calls. All automatically uploaded into Salesforce.",
                icon: Users,
              },
              {
                step: "02",
                title: "Qualification & Assignment",
                description: "Leads are qualified, scored, and assigned to the appropriate team member based on geography, interest area, and lead source. BCC tracking ensures all email activity is logged.",
                icon: Target,
              },
              {
                step: "03",
                title: "Nurture & Follow-Up",
                description: "Structured follow-up sequences via phone and email. Marketing nurture campaigns keep leads warm. All interactions tracked in Salesforce for complete visibility.",
                icon: Mail,
              },
              {
                step: "04",
                title: "Appointment & Conversion",
                description: "Schedule appointments, send intake forms, confirm bookings. Lead converts to a Person Account in Salesforce upon service engagement.",
                icon: CheckCircle2,
              },
              {
                step: "05",
                title: "Service & Transaction",
                description: "Service delivery with real-time transaction tracking. Complete service and cost records maintained in Salesforce for revenue attribution.",
                icon: Zap,
              },
              {
                step: "06",
                title: "Upsell & Retention",
                description: "Post-service follow-up, satisfaction surveys, prescription refill reminders, and new service recommendations. Continuous engagement drives lifetime value.",
                icon: TrendingUp,
              },
            ].map((stage, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <stage.icon className="w-6 h-6 text-primary" />
                  </div>
                  {i < 5 && <div className="w-px h-full bg-primary/20 mt-2" />}
                </div>
                <div className="pb-8">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-xs text-primary font-semibold">STEP {stage.step}</span>
                  </div>
                  <h3 className="font-display text-xl font-medium mb-2">{stage.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lead Sources */}
      <section id="sources" className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              LEAD GENERATION
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Multi-Channel Lead Sources
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: Mail, title: "Email Campaigns", items: ["Drip sequences", "A/B testing", "Segmented lists", "Re-engagement"] },
              { icon: Users, title: "Events", items: ["Wellness summits", "Webinars", "Partner events", "VIP experiences"] },
              { icon: BarChart3, title: "Paid Media", items: ["Search ads", "Social ads", "Programmatic", "Retargeting"] },
              { icon: Phone, title: "Direct Outreach", items: ["Referrals", "Phone calls", "Walk-ins", "Partner intros"] },
            ].map((source, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="bg-card border border-border rounded-2xl p-6 hover:border-primary/40 transition-all"
              >
                <source.icon className="w-8 h-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-medium mb-4">{source.title}</h3>
                <ul className="space-y-2">
                  {source.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CRM & Salesforce */}
      <section id="crm" className="py-20 bg-card/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              CRM INFRASTRUCTURE
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Salesforce-Powered Operations
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Complete CRM implementation with automated workflows, activity tracking, and integrated reporting.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { icon: Database, title: "Centralized Data", description: "Single source of truth for all leads, contacts, accounts, and interactions. No data silos." },
              { icon: Zap, title: "Automated Workflows", description: "Lead assignment, follow-up reminders, form triggers, and nurture sequences — all automated." },
              { icon: Mail, title: "Activity Tracking", description: "Every email, call, meeting, and transaction logged automatically. BCC integration ensures nothing is missed." },
              { icon: BarChart3, title: "Pipeline Visibility", description: "Real-time dashboards showing pipeline health, conversion rates, and revenue attribution by source." },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Analytics */}
      <section id="analytics" className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              MEASUREMENT
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              What Gets Measured Gets Managed
            </motion.h2>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Metrics Table */}
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="grid grid-cols-3 bg-primary/5 border-b border-border">
                <div className="p-4 font-display text-sm font-medium">Metric</div>
                <div className="p-4 font-display text-sm font-medium">What We Track</div>
                <div className="p-4 font-display text-sm font-medium">Why It Matters</div>
              </div>
              {[
                { metric: "Lead Volume", track: "Total leads by source, channel, and campaign", why: "Identifies highest-performing acquisition channels" },
                { metric: "Conversion Rate", track: "Lead-to-appointment and appointment-to-member rates", why: "Measures sales effectiveness and funnel health" },
                { metric: "Cost Per Lead", track: "Marketing spend divided by qualified leads generated", why: "Ensures efficient allocation of marketing budget" },
                { metric: "Customer Lifetime Value", track: "Total revenue per member over their engagement period", why: "Guides investment in acquisition and retention" },
                { metric: "NPS Score", track: "Net Promoter Score from post-service surveys", why: "Predicts retention, referrals, and brand health" },
                { metric: "Pipeline Velocity", track: "Average time from lead to conversion", why: "Identifies bottlenecks and optimization opportunities" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? "" : "bg-muted/20"} ${i < 5 ? "border-b border-border" : ""}`}>
                  <div className="p-4 font-display text-sm font-medium text-primary">{row.metric}</div>
                  <div className="p-4 font-body text-sm text-muted-foreground">{row.track}</div>
                  <div className="p-4 font-body text-sm text-muted-foreground">{row.why}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="/gtm/partnerships" className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-body font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/30">
              Explore Partnerships
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
