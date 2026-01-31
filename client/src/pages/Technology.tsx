/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Technology page - Systems and AI that support the business
 */

import { motion } from "framer-motion";
import { 
  Brain, 
  Database, 
  Shield, 
  Cpu, 
  Cloud, 
  LineChart,
  Smartphone,
  Server,
  Lock,
  Zap,
  Users,
  BarChart3
} from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";

export default function Technology() {
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
              TECHNOLOGY PLATFORM
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Systems & AI Infrastructure
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground">
              Purpose-built technology stack powering personalized care delivery, 
              operational excellence, and data-driven insights at scale.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Core Platform Overview */}
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
                PLATFORM ARCHITECTURE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Integrated Technology Ecosystem
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
                A unified platform connecting patient care, clinical operations, and business intelligence.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Users,
                  title: "Patient Experience Layer",
                  description: "Mobile app, patient portal, telehealth integration, and personalized health dashboards"
                },
                {
                  icon: Server,
                  title: "Clinical Operations Core",
                  description: "EHR integration, scheduling, inventory management, and treatment protocol automation"
                },
                {
                  icon: Brain,
                  title: "AI & Analytics Engine",
                  description: "Predictive modeling, outcome optimization, and business intelligence dashboards"
                }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/50 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="font-display text-xl font-medium mb-3">{item.title}</h3>
                  <p className="font-body text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI & Machine Learning */}
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
                ARTIFICIAL INTELLIGENCE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                AI-Powered Care Optimization
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Brain,
                  title: "Personalized Treatment Protocols",
                  description: "Machine learning models analyze patient biomarkers, genetics, and outcomes to recommend optimal treatment combinations and dosing.",
                  features: ["Biomarker pattern recognition", "Treatment response prediction", "Protocol optimization algorithms"]
                },
                {
                  icon: LineChart,
                  title: "Predictive Health Analytics",
                  description: "AI-driven insights identify health risks before they manifest, enabling proactive interventions and personalized prevention strategies.",
                  features: ["Risk stratification models", "Early warning indicators", "Longitudinal health tracking"]
                },
                {
                  icon: Zap,
                  title: "Operational Intelligence",
                  description: "Real-time optimization of scheduling, inventory, and resource allocation to maximize efficiency and patient satisfaction.",
                  features: ["Demand forecasting", "Dynamic scheduling", "Supply chain optimization"]
                },
                {
                  icon: BarChart3,
                  title: "Outcome Measurement & Reporting",
                  description: "Automated tracking and analysis of treatment outcomes, enabling continuous improvement and evidence-based protocol refinement.",
                  features: ["Automated outcome tracking", "Comparative effectiveness analysis", "Regulatory reporting automation"]
                }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-8 hover:border-accent/50 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium mb-2">{item.title}</h3>
                      <p className="font-body text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-16">
                    {item.features.map((feature, j) => (
                      <li key={j} className="font-body text-sm text-muted-foreground flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Patient-Facing Technology */}
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
                PATIENT EXPERIENCE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Digital Health Platform
              </h2>
              <p className="font-body text-xl text-muted-foreground max-w-2xl mx-auto">
                Seamless digital experience enabling 90% at-home care delivery with continuous engagement.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Smartphone,
                  title: "Mobile Health App",
                  description: "iOS and Android app for appointment booking, health tracking, medication reminders, and secure messaging with care team."
                },
                {
                  icon: Users,
                  title: "Patient Portal",
                  description: "Comprehensive web portal for accessing health records, lab results, treatment plans, and educational content."
                },
                {
                  icon: LineChart,
                  title: "Health Dashboard",
                  description: "Personalized dashboards displaying biomarkers, progress tracking, and AI-generated health insights."
                },
                {
                  icon: Cloud,
                  title: "Telehealth Integration",
                  description: "HIPAA-compliant video consultations with physicians, enabling remote follow-ups and care coordination."
                },
                {
                  icon: Zap,
                  title: "Wearable Integration",
                  description: "Sync data from Apple Watch, Oura Ring, WHOOP, and other devices for continuous health monitoring."
                },
                {
                  icon: Shield,
                  title: "Secure Messaging",
                  description: "Encrypted communication with care team, including photo sharing for wound care and treatment monitoring."
                }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Clinical Operations Systems */}
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
                CLINICAL OPERATIONS
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Operational Systems
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {/* EHR & Clinical Systems */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-2xl font-medium mb-6">Clinical Management</h3>
                <div className="space-y-4">
                  {[
                    { system: "Electronic Health Records (EHR)", status: "Integrated", description: "Custom-built for regenerative medicine workflows" },
                    { system: "Lab Information System", status: "Integrated", description: "Real-time lab result integration and tracking" },
                    { system: "Imaging Management (PACS)", status: "Integrated", description: "MRI, CT, and diagnostic imaging storage" },
                    { system: "Treatment Protocol Engine", status: "Proprietary", description: "Standardized care protocols with AI optimization" },
                    { system: "Inventory & Supply Chain", status: "Integrated", description: "Biologic tracking and cold chain management" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start justify-between gap-4 pb-4 border-b border-border last:border-0">
                      <div>
                        <p className="font-display font-medium">{item.system}</p>
                        <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded flex-shrink-0">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Operations */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h3 className="font-display text-2xl font-medium mb-6">Business Operations</h3>
                <div className="space-y-4">
                  {[
                    { system: "Revenue Cycle Management", status: "Integrated", description: "Membership billing, payment processing, collections" },
                    { system: "CRM & Marketing Automation", status: "Integrated", description: "Lead management and patient engagement campaigns" },
                    { system: "Scheduling & Resource Planning", status: "AI-Powered", description: "Dynamic scheduling with demand forecasting" },
                    { system: "Business Intelligence", status: "Real-time", description: "KPI dashboards and executive reporting" },
                    { system: "Compliance & Audit", status: "Automated", description: "HIPAA, FDA, and regulatory compliance tracking" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start justify-between gap-4 pb-4 border-b border-border last:border-0">
                      <div>
                        <p className="font-display font-medium">{item.system}</p>
                        <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                      </div>
                      <span className="font-mono text-xs text-primary bg-primary/10 px-2 py-1 rounded flex-shrink-0">
                        {item.status}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Data & Security */}
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
                INFRASTRUCTURE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Data & Security
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Cloud,
                  title: "Cloud Infrastructure",
                  description: "HIPAA-compliant cloud hosting with 99.99% uptime SLA and global redundancy"
                },
                {
                  icon: Lock,
                  title: "Data Encryption",
                  description: "End-to-end encryption for all patient data at rest and in transit"
                },
                {
                  icon: Shield,
                  title: "Compliance",
                  description: "HIPAA, SOC 2 Type II, and GDPR compliant with regular third-party audits"
                },
                {
                  icon: Database,
                  title: "Data Warehouse",
                  description: "Centralized data lake enabling advanced analytics and AI model training"
                }
              ].map((item, i) => (
                <div key={i} className="bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-background" />
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2">{item.title}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technology Roadmap */}
      <section className="py-20">
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
                FUTURE DEVELOPMENT
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
                Technology Roadmap
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="space-y-6">
              {[
                {
                  phase: "2027",
                  title: "Foundation",
                  items: ["Core platform deployment", "EHR integration", "Patient mobile app launch", "Basic AI analytics"]
                },
                {
                  phase: "2028",
                  title: "Enhancement",
                  items: ["Advanced AI treatment optimization", "Wearable device integration", "Expanded telehealth capabilities", "Multi-location data sync"]
                },
                {
                  phase: "2029",
                  title: "Scale",
                  items: ["Predictive health modeling", "Automated protocol generation", "International platform expansion", "Third-party API ecosystem"]
                },
                {
                  phase: "2030+",
                  title: "Innovation",
                  items: ["Genomic data integration", "Digital twin technology", "Real-world evidence platform", "AI-driven drug discovery support"]
                }
              ].map((phase, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-20">
                    <span className="font-mono text-sm text-primary">{phase.phase}</span>
                  </div>
                  <div className="flex-1 bg-card border border-border rounded-2xl p-6">
                    <h3 className="font-display text-xl font-medium mb-4">{phase.title}</h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.items.map((item, j) => (
                        <div key={j} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                          <span className="font-body text-sm text-muted-foreground">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Investment in Technology */}
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
                COMPETITIVE ADVANTAGE
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-medium mt-4 mb-8">
                Technology as a Moat
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  value: "XX%",
                  label: "of Series A",
                  description: "Allocated to technology development and AI capabilities"
                },
                {
                  value: "XX+",
                  label: "Engineers",
                  description: "Dedicated technology team building proprietary systems"
                },
                {
                  value: "XX",
                  label: "Patents Pending",
                  description: "Intellectual property in AI-driven healthcare delivery"
                }
              ].map((stat, i) => (
                <div key={i} className="bg-card/50 backdrop-blur border border-border rounded-2xl p-6">
                  <span className="font-display text-4xl font-bold text-gradient">{stat.value}</span>
                  <p className="font-display font-medium mt-2 mb-2">{stat.label}</p>
                  <p className="font-body text-sm text-muted-foreground">{stat.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
