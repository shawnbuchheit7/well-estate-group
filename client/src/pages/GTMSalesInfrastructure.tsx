/*
 * GTM Sales Infrastructure Page - Technology & Platform Stack
 * Design: Ultra-premium luxury — black, grey, white, gold
 * Dedicated tab for the sales technology ecosystem
 */

import { motion } from "framer-motion";
import { Database, Mail, BarChart, FileText, Workflow, Megaphone, ArrowRight, Layers, Cloud, MessageSquare, Calendar, Users } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "core-platforms", label: "Core Platforms" },
  { id: "workflow", label: "Sales Workflow" },
  { id: "additional-tools", label: "Additional Tools" },
];

const corePlatforms = [
  {
    name: "Salesforce",
    category: "CRM & Pipeline",
    icon: Database,
    description: "Enterprise CRM for full pipeline management, deal tracking, account mapping, and forecasting across all 8 lines of business and 4 global regions.",
    features: ["Pipeline Management", "Account Mapping", "Deal Forecasting", "Territory Management"],
  },
  {
    name: "HubSpot",
    category: "Marketing Automation",
    icon: Megaphone,
    description: "Inbound marketing engine for lead nurturing, email sequences, content distribution, and marketing-qualified lead scoring by vertical.",
    features: ["Email Sequences", "Lead Scoring", "Content CMS", "Landing Pages"],
  },
  {
    name: "Outreach / Salesloft",
    category: "Sales Engagement",
    icon: Mail,
    description: "Multi-channel outreach automation for prospecting cadences, call tracking, and meeting scheduling across club, medical, and government channels.",
    features: ["Cadence Automation", "Call Tracking", "Meeting Scheduling", "A/B Testing"],
  },
  {
    name: "Tableau / Power BI",
    category: "Analytics & Reporting",
    icon: BarChart,
    description: "Real-time dashboards for sales performance, channel attribution, regional pipeline health, and executive reporting to stakeholders.",
    features: ["Pipeline Dashboards", "Channel Attribution", "Regional Analytics", "Executive Reports"],
  },
  {
    name: "DocuSign / PandaDoc",
    category: "Contract Management",
    icon: FileText,
    description: "Streamlined proposal generation, contract management, and e-signature workflows for dealer agreements, club partnerships, and government procurement.",
    features: ["Proposal Templates", "E-Signatures", "Contract Tracking", "Approval Workflows"],
  },
  {
    name: "Zapier / Make",
    category: "Integration & Automation",
    icon: Workflow,
    description: "Workflow automation connecting all platforms — syncing leads from events, triggering follow-ups, updating CRM records, and routing leads by vertical.",
    features: ["Platform Sync", "Lead Routing", "Event Triggers", "Data Enrichment"],
  },
];

const additionalTools = [
  { name: "Slack / Teams", category: "Internal Communication", icon: MessageSquare, description: "Real-time team coordination, deal-room channels per vertical, and automated pipeline notifications." },
  { name: "Calendly / Chili Piper", category: "Scheduling", icon: Calendar, description: "Automated meeting scheduling with round-robin routing by territory and vertical specialization." },
  { name: "LinkedIn Sales Navigator", category: "Prospecting", icon: Users, description: "Advanced prospecting and account-based targeting for decision-makers across clubs, medical, and corporate channels." },
  { name: "Google Workspace", category: "Productivity", icon: Cloud, description: "Shared drives, collaborative documents, and presentation materials organized by LOB and region." },
  { name: "Notion / Confluence", category: "Knowledge Base", icon: Layers, description: "Centralized playbooks, competitive intelligence, objection handling guides, and onboarding documentation." },
  { name: "Gong / Chorus", category: "Revenue Intelligence", icon: BarChart, description: "Call recording and AI-powered conversation analytics to identify winning patterns and coach sales teams." },
];

const workflowSteps = [
  { step: "Lead Capture", detail: "Events, Inbound, Referrals", platform: "HubSpot" },
  { step: "Qualification", detail: "Scoring & Routing", platform: "HubSpot + Salesforce" },
  { step: "Outreach", detail: "Multi-Channel Cadences", platform: "Salesloft" },
  { step: "Pipeline", detail: "Deal Tracking & Forecasting", platform: "Salesforce" },
  { step: "Proposal", detail: "Generation & Approval", platform: "PandaDoc" },
  { step: "Close", detail: "E-Sign & Onboarding", platform: "DocuSign" },
];

export default function GTMSalesInfrastructure() {
  return (
    <Layout section="gtm-sample">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          eyebrow="Sales Infrastructure"
          title="Technology & Platform Stack"
          description="A fully integrated sales technology ecosystem to manage pipeline, automate outreach, track performance, and scale operations across all verticals and regions."
          stats={[
            { value: "6", label: "Core Platforms" },
            { value: "6", label: "Supporting Tools" },
            { value: "24+", label: "Integrations" },
          ]}
        />
      </div>

      {/* Core Platforms */}
      <section id="core-platforms" className="py-18">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/25 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Core Stack
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Primary Platforms
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/55 max-w-2xl mx-auto">
              The six foundational platforms that power every stage of the sales cycle — from first touch to closed deal.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {corePlatforms.map((platform, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                className="bg-white border-2 border-[#B8860B]/65 rounded-xl overflow-hidden hover:border-[#B8860B]/60 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div className="flex items-center gap-3 px-5 py-4 border-b border-[#B8860B]/70 bg-[#FAFAF8]">
                  <div className="w-10 h-10 rounded-lg bg-[#B8860B]/10 flex items-center justify-center flex-shrink-0">
                    <platform.icon className="w-5 h-5 text-[#B8860B]" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-semibold text-black leading-tight">{platform.name}</h3>
                    <p className="font-mono text-[10px] text-black/45 tracking-wider uppercase">{platform.category}</p>
                  </div>
                </div>
                <div className="p-5">
                  <p className="font-body text-sm text-black/55 leading-relaxed mb-4">{platform.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {platform.features.map((feature, j) => (
                      <span
                        key={j}
                        className="px-2.5 py-1 rounded-full bg-[#B8860B]/[0.06] text-[11px] font-mono text-black/55 tracking-wide"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrated Sales Workflow */}
      <section id="workflow" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              End-to-End Pipeline
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Integrated Sales Workflow
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/55 max-w-2xl mx-auto">
              A seamless six-stage pipeline from lead generation to closed deal, with each stage powered by a dedicated platform.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {/* Desktop Flow */}
            <div className="hidden md:flex items-center justify-center gap-2">
              {workflowSteps.map((item, i) => (
                <motion.div key={i} variants={fadeInUp} className="flex items-center gap-2">
                  <motion.div
                    whileHover={{ y: -4, boxShadow: "0 12px 30px rgba(0,0,0,0.06)" }}
                    className="text-center px-5 py-4 rounded-xl bg-white border-2 border-[#B8860B]/65 shadow-[0_2px_8px_rgba(0,0,0,0.02)] min-w-[140px] hover:border-[#B8860B]/60 transition-all duration-300"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#B8860B]/10 flex items-center justify-center mx-auto mb-2">
                      <span className="font-display text-sm font-bold text-[#B8860B]">{i + 1}</span>
                    </div>
                    <p className="font-display text-sm font-semibold text-black">{item.step}</p>
                    <p className="font-body text-[10px] text-black/45 mt-0.5">{item.detail}</p>
                    <p className="font-mono text-[9px] text-[#B8860B]/60 tracking-wider uppercase mt-2">{item.platform}</p>
                  </motion.div>
                  {i < workflowSteps.length - 1 && (
                    <motion.div
                      animate={{ x: [0, 3, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.2 }}
                    >
                      <ArrowRight className="w-4 h-4 text-[#B8860B] flex-shrink-0" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mobile Flow */}
            <div className="md:hidden grid grid-cols-2 gap-3">
              {workflowSteps.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="text-center px-4 py-4 rounded-xl bg-white border-2 border-[#B8860B]/65 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
                >
                  <div className="w-7 h-7 rounded-full bg-[#B8860B]/10 flex items-center justify-center mx-auto mb-2">
                    <span className="font-display text-xs font-bold text-[#B8860B]">{i + 1}</span>
                  </div>
                  <p className="font-display text-sm font-semibold text-black">{item.step}</p>
                  <p className="font-body text-[10px] text-black/45 mt-0.5">{item.detail}</p>
                  <p className="font-mono text-[9px] text-[#B8860B]/60 tracking-wider uppercase mt-1.5">{item.platform}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Tools */}
      <section id="additional-tools" className="py-18">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/25 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Supporting Ecosystem
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Additional Tools
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/55 max-w-2xl mx-auto">
              Complementary platforms that enhance team productivity, prospecting, and knowledge management across the organization.
            </motion.p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {additionalTools.map((tool, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.05)" }}
                className="flex gap-4 items-start p-5 rounded-xl bg-white border-2 border-[#B8860B]/65 hover:border-[#B8860B]/60 transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div className="w-9 h-9 rounded-lg bg-[#B8860B]/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <tool.icon className="w-4.5 h-4.5 text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-semibold text-black mb-0.5">{tool.name}</h3>
                  <p className="font-mono text-[9px] text-black/25 tracking-wider uppercase mb-2">{tool.category}</p>
                  <p className="font-body text-sm text-black/55 leading-relaxed">{tool.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
