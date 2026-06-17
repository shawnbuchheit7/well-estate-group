/*
 * Integrated Technology Ecosystem — Detail Page
 * Full breakdown of the platform architecture, AI capabilities, and clinical systems
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
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function TechEcosystem() {
  return (
    <Layout>
      <LightHero
        eyebrow="Technology & AI"
        title="Integrated Technology Ecosystem"
        description="A unified platform connecting patient care, clinical operations, and business intelligence — purpose-built for precision health delivery at scale."
        stats={[
          { value: "30+", label: "System Integrations" },
          { value: "15B+", label: "Data Points" },
          { value: "99.99%", label: "Uptime SLA" },
        ]}
      />

      {/* Core Platform Overview */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container px-6">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
                Platform Architecture
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mt-4 mb-4 text-black">
                Three-Layer Architecture
              </h2>
              <p className="font-body text-base text-black/60 max-w-2xl mx-auto">
                Patient experience, clinical operations, and AI analytics — unified into a single operating system.
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
                <div key={i} className="bg-white border border-[#B8860B]/20 rounded-2xl p-8 hover:border-[#B8860B]/50 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-[#B8860B]/10 flex items-center justify-center mb-6">
                    <item.icon className="w-7 h-7 text-[#B8860B]" />
                  </div>
                  <h3 className="font-display text-xl font-medium mb-3 text-black">{item.title}</h3>
                  <p className="font-body text-sm text-black/60">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* AI & Machine Learning */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
                Artificial Intelligence
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
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
                <div key={i} className="bg-white border border-[#B8860B]/20 rounded-2xl p-8 hover:border-[#B8860B]/50 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-[#B8860B]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-[#B8860B]" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-medium mb-2 text-black">{item.title}</h3>
                      <p className="font-body text-sm text-black/60">{item.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 ml-16">
                    {item.features.map((feature, j) => (
                      <li key={j} className="font-body text-sm text-black/50 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]" />
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

      {/* Digital Health Platform */}
      <section className="py-20 bg-[#FAFAF8]">
        <div className="container px-6">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
                Patient Experience
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mt-4 mb-4 text-black">
                Digital Health Platform
              </h2>
              <p className="font-body text-base text-black/60 max-w-2xl mx-auto">
                Seamless digital experience enabling 90% at-home care delivery with continuous engagement.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: Smartphone, title: "Mobile Health App", description: "iOS and Android app for appointment booking, health tracking, medication reminders, and secure messaging with care team." },
                { icon: Users, title: "Patient Portal", description: "Comprehensive web portal for accessing health records, lab results, treatment plans, and educational content." },
                { icon: LineChart, title: "Health Dashboard", description: "Personalized dashboards displaying biomarkers, progress tracking, and AI-generated health insights." },
                { icon: Cloud, title: "Telehealth Integration", description: "HIPAA-compliant video consultations with physicians, enabling remote follow-ups and care coordination." },
                { icon: Zap, title: "Wearable Integration", description: "Sync data from Apple Watch, Oura Ring, WHOOP, and other devices for continuous health monitoring." },
                { icon: Shield, title: "Secure Messaging", description: "Encrypted communication with care team, including photo sharing for wound care and treatment monitoring." }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-[#B8860B]/20 rounded-2xl p-6 hover:border-[#B8860B]/50 transition-colors">
                  <div className="w-12 h-12 rounded-xl bg-[#B8860B]/10 flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-[#B8860B]" />
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2 text-black">{item.title}</h3>
                  <p className="font-body text-sm text-black/60">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Data & Security */}
      <section className="py-20 bg-white">
        <div className="container px-6">
          <motion.div 
            className="max-w-6xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <span className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
                Infrastructure
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
                Data & Security
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Cloud, title: "Cloud Infrastructure", description: "HIPAA-compliant cloud hosting with 99.99% uptime SLA and global redundancy" },
                { icon: Lock, title: "Data Encryption", description: "End-to-end encryption for all patient data at rest and in transit" },
                { icon: Shield, title: "Compliance", description: "HIPAA, SOC 2 Type II, and GDPR compliant with regular third-party audits" },
                { icon: Database, title: "Data Warehouse", description: "Centralized data lake enabling advanced analytics and AI model training" }
              ].map((item, i) => (
                <div key={i} className="bg-[#FAFAF8] border border-[#B8860B]/20 rounded-2xl p-6 text-center hover:border-[#B8860B]/50 transition-colors">
                  <div className="w-14 h-14 rounded-xl bg-[#B8860B]/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-[#B8860B]" />
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2 text-black">{item.title}</h3>
                  <p className="font-body text-sm text-black/60">{item.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
