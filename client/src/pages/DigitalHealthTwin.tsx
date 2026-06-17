/*
 * Digital Health Twin — Detail Page
 * Full-body organ-level health visualization platform
 * Content sourced from digital-health-twin repo architecture docs
 */

import { motion } from "framer-motion";
import { 
  Brain, 
  Heart, 
  Activity, 
  Dna, 
  Eye, 
  Layers,
  BarChart3,
  TrendingUp,
  Cpu,
  Database,
  Smartphone,
  Shield
} from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function DigitalHealthTwin() {
  return (
    <Layout>
      <LightHero
        eyebrow="Technology & AI"
        title="Digital Health Twin"
        description="A personalized, full-body health visualization platform mapping 122 biomarkers, 8 major imaging modalities, and 6 functional assessments into a unified digital twin — giving each member a living, data-driven model of their health."
        stats={[
          { value: "122", label: "Biomarkers Mapped" },
          { value: "10", label: "Organ Systems" },
          { value: "40+", label: "Data Sources" },
        ]}
      />

      {/* What It Does */}
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
                Platform Overview
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mt-4 mb-4 text-black">
                Your Health, Visualized
              </h2>
              <p className="font-body text-base text-black/60 max-w-3xl mx-auto">
                The Digital Health Twin transforms complex clinical data into an intuitive, organ-level health visualization — enabling members and physicians to see the full picture at a glance.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Layers,
                  title: "Organ-Level Scoring",
                  description: "Each of 10 major organ systems receives a composite health score derived from imaging, labs, genetics, and functional testing."
                },
                {
                  icon: TrendingUp,
                  title: "Longitudinal Tracking",
                  description: "Health data tracked over time — not a snapshot, but a continuous narrative revealing trends, trajectories, and inflection points."
                },
                {
                  icon: Cpu,
                  title: "AI-Generated Insights",
                  description: "Machine learning identifies patterns across biomarkers, generating personalized recommendations and early warning signals."
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

      {/* Data Sources */}
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
                Data Integration
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mt-4 mb-4 text-black">
                Multi-Source Data Architecture
              </h2>
              <p className="font-body text-base text-black/60 max-w-2xl mx-auto">
                Integrating data from diagnostic equipment, wearables, clinical systems, and genomics into a unified health model.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {[
                {
                  category: "Imaging & Diagnostics",
                  count: "8 modalities",
                  items: ["Full Body MRI (AMRA)", "Brain MRI (BrainKey)", "CCTA (Cleerly)", "DEXA Scan", "Low Dose Lung CT", "Multi-Cancer Detection (Grail)", "Retinal Scan (AEYE)", "Skin Cancer (SkinIO)"]
                },
                {
                  category: "Laboratory Testing",
                  count: "122 biomarkers",
                  items: ["Cardiovascular & Lipid (30)", "Metabolic & Diabetes (5)", "Renal & Electrolytes (12)", "Liver Function (13)", "Hormones (15–17)", "Autoimmune (5)", "Hematology (20)", "Vitamins & Minerals (10+)"]
                },
                {
                  category: "Wearables & Monitoring",
                  count: "Real-time",
                  items: ["Apple HealthKit", "Withings Sleep Mat", "Technogym Equipment", "Heart rate & HRV", "Sleep stages", "Activity & steps", "Workout data"]
                },
                {
                  category: "Specialty Testing",
                  count: "Advanced",
                  items: ["Whole Genome Sequencing", "Biological Age (TruAge)", "Microbiome (Jona)", "Oral Pathogens", "Home Sleep Test", "Environmental Toxicants", "Olfactory Testing"]
                }
              ].map((group, i) => (
                <div key={i} className="bg-[#FAFAF8] border border-[#B8860B]/20 rounded-2xl p-6">
                  <h3 className="font-display text-lg font-medium text-black mb-1">{group.category}</h3>
                  <p className="font-mono text-[10px] tracking-[0.15em] text-[#B8860B] uppercase mb-4">{group.count}</p>
                  <div className="space-y-2">
                    {group.items.map((item, j) => (
                      <div key={j} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-[#B8860B]/50 mt-2 flex-shrink-0" />
                        <span className="font-body text-xs text-black/55">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Organ Systems */}
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
                Organ Health Scoring
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mt-4 mb-4 text-black">
                10 Primary Organ Systems
              </h2>
              <p className="font-body text-base text-black/60 max-w-2xl mx-auto">
                Each organ system receives a composite health score derived from multiple data sources, weighted by clinical significance.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { icon: Heart, name: "Heart", category: "Cardiovascular" },
                { icon: Brain, name: "Brain", category: "Neurological" },
                { icon: Activity, name: "Lungs", category: "Respiratory" },
                { icon: Database, name: "Liver", category: "Digestive" },
                { icon: Shield, name: "Kidneys", category: "Urinary" },
                { icon: Dna, name: "Pancreas", category: "Endocrine" },
                { icon: Eye, name: "Eyes", category: "Cardiovascular Proxy" },
                { icon: Activity, name: "Musculoskeletal", category: "Movement" },
                { icon: Shield, name: "Immune System", category: "Immune" },
                { icon: Dna, name: "Thyroid", category: "Endocrine" },
              ].map((organ, i) => (
                <div key={i} className="bg-white border border-[#B8860B]/20 rounded-xl p-4 text-center hover:border-[#B8860B]/50 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-[#B8860B]/10 flex items-center justify-center mx-auto mb-3">
                    <organ.icon className="w-5 h-5 text-[#B8860B]" />
                  </div>
                  <h4 className="font-display text-sm font-medium text-black mb-0.5">{organ.name}</h4>
                  <p className="font-mono text-[8px] tracking-[0.15em] text-black/40 uppercase">{organ.category}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Platform Components */}
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
                System Architecture
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mt-4 mb-4 text-black">
                Platform Components
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Digital Health Twin Visualization",
                  description: "Full-body interactive 3D model with organ-level health scoring, status indicators, and drill-down capability. Gender-aware biomarker filtering and anatomical accuracy.",
                  stats: "1,560 LOC"
                },
                {
                  title: "Biomarker Intelligence",
                  description: "Comprehensive biomarker tracking with historical trends, reference ranges, goal setting, and AI-generated insights. Supports 122 biomarkers across 7 categories.",
                  stats: "1,666 LOC"
                },
                {
                  title: "Biomarker Trends & Analytics",
                  description: "Longitudinal trend visualization with sparklines, comparative analysis, and predictive trajectory modeling for each tracked biomarker.",
                  stats: "1,121 LOC"
                },
                {
                  title: "Health Timeline",
                  description: "Chronological record of assessments, diagnoses, treatments, milestones, lifestyle changes, and medication events — the complete health narrative.",
                  stats: "731 LOC"
                },
                {
                  title: "Wearable Data Integration",
                  description: "Real-time sync with Apple HealthKit, Withings, and Technogym. Continuous monitoring of heart rate, HRV, sleep, activity, and workout performance.",
                  stats: "486 LOC"
                },
                {
                  title: "Onboarding & Guided Tour",
                  description: "Interactive walkthrough introducing members to their Digital Health Twin, explaining scores, navigation, and how to interpret their health data.",
                  stats: "751 LOC"
                },
              ].map((component, i) => (
                <div key={i} className="bg-[#FAFAF8] border border-[#B8860B]/20 rounded-2xl p-8 hover:border-[#B8860B]/50 transition-colors">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-display text-lg font-medium text-black">{component.title}</h3>
                    <span className="font-mono text-[9px] tracking-[0.15em] text-[#B8860B] bg-[#B8860B]/10 px-2 py-1 rounded">{component.stats}</span>
                  </div>
                  <p className="font-body text-sm text-black/60 leading-relaxed">{component.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Technical Stack */}
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
                Technical Foundation
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
                Built for Scale
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6">
              {[
                {
                  layer: "Frontend",
                  items: ["React 19 + TypeScript", "Tailwind CSS 4 + shadcn/ui", "Recharts for data visualization", "Interactive 3D organ models", "Gender-aware biomarker filtering"]
                },
                {
                  layer: "API Layer",
                  items: ["tRPC 11 + Express 4", "Health procedures (8 endpoints)", "Goals & insights procedures", "Admin procedures", "Real-time data sync"]
                },
                {
                  layer: "Data Layer",
                  items: ["Drizzle ORM + MySQL/TiDB", "8 core data tables", "122 biomarker definitions", "Longitudinal history storage", "AI insight caching"]
                }
              ].map((stack, i) => (
                <div key={i} className="bg-white border border-[#B8860B]/20 rounded-2xl p-6">
                  <h3 className="font-mono text-[10px] tracking-[0.2em] text-[#B8860B] uppercase mb-4">{stack.layer}</h3>
                  <div className="space-y-3">
                    {stack.items.map((item, j) => (
                      <div key={j} className="flex items-center gap-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#B8860B]/50" />
                        <span className="font-body text-sm text-black/60">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Database Schema Overview */}
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
                Data Model
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-medium mt-4 text-black">
                Schema Architecture
              </h2>
            </motion.div>

            <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-6">
              {[
                { table: "health_profiles", purpose: "Per-user health overview", fields: "Overall score, gender, biological age, chronological age" },
                { table: "organ_assessments", purpose: "Organ-level health scores", fields: "Organ name, category, health score, status, findings, recommendations" },
                { table: "biomarkers", purpose: "Lab results and indicators", fields: "Name, category, value, unit, reference range, status, test date" },
                { table: "health_assessments", purpose: "Comprehensive check records", fields: "Type, date, overall score, summary, physician notes" },
                { table: "health_timeline_events", purpose: "Significant health events", fields: "Event type, date, title, description, related organ" },
                { table: "biomarker_goals", purpose: "Personal target values", fields: "Biomarker name, target value, target date, active status" },
                { table: "biomarker_insights", purpose: "AI-generated insights", fields: "Insight type, title, content, priority, expiration" },
                { table: "users", purpose: "Authentication and identity", fields: "OpenID, name, email, role (admin/user)" },
              ].map((schema, i) => (
                <div key={i} className="flex items-start gap-4 p-4 rounded-xl border border-[#B8860B]/10 bg-[#FAFAF8]">
                  <div className="w-2 h-2 rounded-full bg-[#B8860B] mt-2 flex-shrink-0" />
                  <div>
                    <h4 className="font-mono text-sm font-medium text-black mb-0.5">{schema.table}</h4>
                    <p className="font-body text-xs text-black/50 mb-1">{schema.purpose}</p>
                    <p className="font-body text-xs text-black/40">{schema.fields}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
