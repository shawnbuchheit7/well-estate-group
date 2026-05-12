/*
 * GTM Lead Flow & CRM Page - WEG Lead Management
 * Design: Super premium luxury — white/cream/gold, sharp contrast, refined typography
 */

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Mail, Phone, Users, Database, TrendingUp, CheckCircle2, Zap, Target } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
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
      <div id="hero">
        <LightHero
          eyebrow="Lead Management"
          title="Lead Flow & CRM"
          description="End-to-end lead journey management — from first touch to conversion, service delivery, and upsell — powered by Salesforce CRM with full funnel visibility."
          stats={[
            { value: "6", label: "Journey Stages" },
            { value: "4", label: "Lead Channels" },
            { value: "100%", label: "Tracked" },
            { value: "24/7", label: "Automated" },
          ]}
        />
      </div>

      {/* Lead Journey */}
      <section id="journey" className="py-20 sm:py-24 bg-[#F9F9F7]">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-[11px] tracking-[0.25em] uppercase">
              The Lead Journey
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              From Contact to Customer
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/50 max-w-2xl mx-auto mt-4 leading-relaxed">
              A structured, trackable journey that ensures no lead falls through the cracks.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-3xl mx-auto"
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
                className="flex gap-5 mb-6 last:mb-0"
              >
                <div className="flex flex-col items-center flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-white border border-black/[0.10] shadow-[0_2px_8px_rgba(0,0,0,0.04)] flex items-center justify-center">
                    <stage.icon className="w-5 h-5 text-[#C9A962]" />
                  </div>
                  {i < 5 && <div className="w-px h-full bg-black/[0.08] mt-2" />}
                </div>
                <div className="pb-6">
                  <div className="flex items-center gap-3 mb-1.5">
                    <span className="font-mono text-[10px] text-[#C9A962] font-semibold tracking-[0.15em]">STEP {stage.step}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-black mb-2 tracking-tight">{stage.title}</h3>
                  <p className="font-body text-sm text-black/50 leading-relaxed">{stage.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lead Sources */}
      <section id="sources" className="py-20 sm:py-24 bg-white">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Lead Generation
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Multi-Channel Lead Sources
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto"
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
                whileHover={{ y: -4 }}
                className="bg-white border border-black/[0.10] rounded-xl p-6 shadow-[0_2px_8px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:border-[#C9A962]/25 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#F9F9F7] border border-black/[0.06] flex items-center justify-center mb-5">
                  <source.icon className="w-5 h-5 text-[#C9A962]" />
                </div>
                <h3 className="font-display text-base font-bold text-black mb-4 tracking-tight">{source.title}</h3>
                <ul className="space-y-2.5">
                  {source.items.map((item, j) => (
                    <li key={j} className="flex items-center gap-2.5 font-body text-sm text-black/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#C9A962]/60" />
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
      <section id="crm" className="py-20 sm:py-24 bg-[#F9F9F7]">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-[11px] tracking-[0.25em] uppercase">
              CRM Infrastructure
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Salesforce-Powered Operations
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/50 max-w-2xl mx-auto mt-4 leading-relaxed">
              Complete CRM implementation with automated workflows, activity tracking, and integrated reporting.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto"
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
                whileHover={{ y: -3 }}
                className="flex gap-5 p-6 rounded-xl bg-white border border-black/[0.10] shadow-[0_2px_8px_rgba(0,0,0,0.03),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.07)] hover:border-[#C9A962]/25 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#F9F9F7] border border-black/[0.06] flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-[#C9A962]" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-black mb-2 tracking-tight">{feature.title}</h3>
                  <p className="font-body text-sm text-black/50 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Analytics */}
      <section id="analytics" className="py-20 sm:py-24 bg-white">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Measurement
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
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
            <motion.div variants={fadeInUp} className="bg-white border border-black/[0.10] rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.05)] overflow-hidden">
              <div className="grid grid-cols-3 bg-[#F5F4F1] border-b border-black/[0.08]">
                <div className="px-6 py-4 font-mono text-[11px] tracking-[0.15em] uppercase font-semibold">Metric</div>
                <div className="px-6 py-4 font-mono text-[11px] tracking-[0.15em] uppercase font-semibold">What We Track</div>
                <div className="px-6 py-4 font-mono text-[11px] tracking-[0.15em] uppercase font-semibold">Why It Matters</div>
              </div>
              {[
                { metric: "Lead Volume", track: "Total leads by source, channel, and campaign", why: "Identifies highest-performing acquisition channels" },
                { metric: "Conversion Rate", track: "Lead-to-appointment and appointment-to-member rates", why: "Measures sales effectiveness and funnel health" },
                { metric: "Cost Per Lead", track: "Marketing spend divided by qualified leads generated", why: "Ensures efficient allocation of marketing budget" },
                { metric: "Customer Lifetime Value", track: "Total revenue per member over their engagement period", why: "Guides investment in acquisition and retention" },
                { metric: "NPS Score", track: "Net Promoter Score from post-service surveys", why: "Predicts retention, referrals, and brand health" },
                { metric: "Pipeline Velocity", track: "Average time from lead to conversion", why: "Identifies bottlenecks and optimization opportunities" },
              ].map((row, i) => (
                <div key={i} className={`grid grid-cols-3 ${i % 2 === 0 ? "bg-white" : "bg-[#FAFAF8]"} ${i < 5 ? "border-b border-black/[0.06]" : ""} hover:bg-[#F5F4F0] transition-colors duration-150`}>
                  <div className="px-6 py-4 font-display text-sm font-bold text-black">{row.metric}</div>
                  <div className="px-6 py-4 font-body text-sm text-black/50">{row.track}</div>
                  <div className="px-6 py-4 font-body text-sm text-black/50">{row.why}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* CTA */}
          <motion.div
            className="text-center mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <a href="/gtm/partnerships" className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-lg bg-[#C9A962] text-white font-body text-sm font-semibold hover:bg-[#B8963E] shadow-[0_2px_8px_rgba(201,169,98,0.3)] hover:shadow-[0_8px_24px_rgba(201,169,98,0.35)] transition-all">
              Explore Partnerships
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
