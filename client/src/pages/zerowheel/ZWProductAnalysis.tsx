/*
 * ZeroWheel Product Analysis Page
 * Unit review, GTM strategies per macro LOB, and leverage points
 */

import { motion } from "framer-motion";
import { Package, Target, Dumbbell, Building2, Stethoscope, Ship, Shield, Users, Zap, CheckCircle2, ArrowRight, Star, Lightbulb, TrendingUp } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "unit-review", label: "Unit Review" },
  { id: "lob-strategies", label: "LOB Strategies" },
  { id: "leverage-points", label: "Leverage Points" },
  { id: "recommendations", label: "Recommendations" },
];

const lobStrategies = [
  {
    icon: Dumbbell,
    lob: "Premium Fitness Clubs",
    strategy: "Position as the flagship core training station for luxury club floors. Leverage club operator relationships to secure floor placements with revenue-share models.",
    leverage: "Club operators seek differentiation — a motorized core device is a visual and functional centerpiece that drives member retention.",
    tactics: ["Demo day partnerships with top 50 clubs", "Revenue-share placement model", "Co-branded marketing materials", "Trainer certification program"],
  },
  {
    icon: Building2,
    lob: "Hospitality & Resorts",
    strategy: "Target 5-star hotel fitness centers and wellness resorts as a premium amenity upgrade. Position as a guest experience differentiator.",
    leverage: "Hotels compete on wellness amenities — a connected device with personalized programs elevates the guest experience.",
    tactics: ["Hospitality trade show presence (HITEC, ALIS)", "Pilot program with 3 luxury hotel chains", "White-label branding option", "Guest engagement analytics dashboard"],
  },
  {
    icon: Stethoscope,
    lob: "Medical & Rehabilitation",
    strategy: "Position for physical therapy clinics, orthopedic rehab centers, and sports medicine facilities. Emphasize clinical-grade core strengthening with progressive resistance.",
    leverage: "Scalable difficulty and data tracking make it ideal for prescribed rehab protocols with measurable outcomes.",
    tactics: ["Clinical validation studies", "CPT code alignment for insurance billing", "Integration with EMR/EHR systems", "KOL partnerships with sports medicine physicians"],
  },
  {
    icon: Shield,
    lob: "Military & Government",
    strategy: "Target DoD fitness programs, VA rehabilitation centers, and first responder training facilities through GSA Schedule and IDIQ contracts.",
    leverage: "Government buyers value durability, data tracking, and scalable deployment — all core device strengths.",
    tactics: ["GSA Schedule listing", "IDIQ contract pursuit", "Pilot with 2-3 military installations", "Compliance with MIL-STD requirements"],
  },
  {
    icon: Users,
    lob: "Professional Sports",
    strategy: "Secure adoption by professional sports teams and training facilities as a performance edge. Target strength & conditioning coaches as champions.",
    leverage: "Pro teams are early adopters of performance tech — one high-profile adoption creates cascading demand.",
    tactics: ["S&C coach outreach program", "Team sponsorship/equipment deals", "Performance data case studies", "Athlete ambassador partnerships"],
  },
  {
    icon: Ship,
    lob: "Cruise & Maritime",
    strategy: "Target cruise line fitness centers and superyacht installations. Compact footprint and connected features are ideal for space-constrained marine environments.",
    leverage: "Cruise lines invest heavily in onboard wellness — a connected device with virtual classes fits the premium cruise experience.",
    tactics: ["Cruise line procurement partnerships", "Marine-grade certification", "Virtual class content for at-sea use", "Superyacht dealer network"],
  },
  {
    icon: Target,
    lob: "Corporate Wellness",
    strategy: "Position for Fortune 500 corporate fitness centers and employee wellness programs. Emphasize ROI through engagement data and health outcomes.",
    leverage: "Corporate wellness budgets are growing — connected fitness with usage analytics proves program ROI to HR leaders.",
    tactics: ["Corporate wellness platform integration", "Employee engagement reporting", "Bulk procurement pricing", "Wellness program consulting bundle"],
  },
  {
    icon: Package,
    lob: "Direct-to-Consumer",
    strategy: "Premium DTC channel for high-net-worth individuals and home gym enthusiasts. Position as the luxury home fitness centerpiece.",
    leverage: "Connected fitness market is proven (Peloton, Tonal) — a core-focused device fills an unoccupied niche at the premium end.",
    tactics: ["Premium e-commerce experience", "Influencer and content creator partnerships", "Subscription content model", "White-glove delivery and setup"],
  },
];

export default function ZWProductAnalysis() {
  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          logoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/VgVkPihMTEChPvmp.png"
          logoAlt="ZeroWheel"
          brandName="ZeroWheel"
          eyebrow="Product Analysis"
          title="Unit Review & GTM Strategy by LOB"
          description="A hands-on product analysis of the ZeroWheel unit — evaluating build quality, feature set, and market positioning — with tailored go-to-market strategies for each macro line of business."
          stats={[
            { value: "8", label: "Macro LOBs Analyzed" },
            { value: "32", label: "Tactical Initiatives" },
            { value: "5", label: "Key Leverage Points" },
          ]}
        />
      </div>

      {/* Unit Review */}
      <section id="unit-review" className="py-18 bg-white">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-black/8 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Unit Review
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Product Assessment
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Detailed evaluation of the ZeroWheel unit based on hands-on review — covering design, functionality, build quality, and market readiness.
            </motion.p>
          </motion.div>

          {/* Assessment Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { title: "Build Quality", icon: Star, items: ["Materials & construction", "Durability assessment", "Finish & aesthetics", "Weight & portability"] },
              { title: "Feature Set", icon: Zap, items: ["Motorized resistance system", "Difficulty scaling range", "Connected app features", "Data tracking capabilities"] },
              { title: "User Experience", icon: Users, items: ["Setup & onboarding", "Ergonomic design", "Noise & vibration levels", "Maintenance requirements"] },
              { title: "Market Readiness", icon: TrendingUp, items: ["Packaging & presentation", "Documentation quality", "Warranty & support", "Regulatory compliance"] },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-black/[0.15] bg-white hover:shadow-lg transition-all duration-300"
              >
                <card.icon className="w-8 h-8 text-[#C9A962] mb-4" />
                <h3 className="font-display text-lg font-semibold text-black mb-3">{card.title}</h3>
                <ul className="space-y-2">
                  {card.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-black/60">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A962] mt-0.5 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Placeholder for Shawn's detailed review */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-8 rounded-2xl border-2 border-dashed border-[#C9A962]/30 bg-[#FAFAF8] text-center max-w-4xl mx-auto"
          >
            <Lightbulb className="w-10 h-10 text-[#C9A962] mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-black mb-2">Detailed Unit Review</h3>
            <p className="font-body text-sm text-black/50">
              This section will be populated with Shawn's hands-on product review, photos, and detailed assessment notes from the ZeroWheel unit evaluation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* LOB-Specific GTM Strategies */}
      <section id="lob-strategies" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              GTM by Line of Business
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Tailored Strategies per Macro LOB
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Each macro line of business requires a distinct go-to-market approach — from positioning and messaging to channel tactics and leverage points.
            </motion.p>
          </motion.div>

          <div className="space-y-6 max-w-5xl mx-auto">
            {lobStrategies.map((lob, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="p-8 rounded-2xl border border-black/[0.15] bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#C9A962]/10 flex items-center justify-center flex-shrink-0">
                    <lob.icon className="w-6 h-6 text-[#C9A962]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-xl font-semibold text-black mb-2">{lob.lob}</h3>
                    <p className="font-body text-sm text-black/65 mb-3">{lob.strategy}</p>
                    
                    <div className="p-4 rounded-xl bg-[#FAFAF8] border border-black/[0.08] mb-4">
                      <p className="font-mono text-[10px] text-[#C9A962] tracking-wider uppercase mb-1">Key Leverage Point</p>
                      <p className="font-body text-sm text-black/70 italic">{lob.leverage}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      {lob.tactics.map((tactic, j) => (
                        <div key={j} className="flex items-center gap-2 text-sm text-black/60">
                          <ArrowRight className="w-3 h-3 text-[#C9A962] flex-shrink-0" />
                          {tactic}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Leverage Points */}
      <section id="leverage-points" className="py-18 bg-white">
        <div className="container">
          <div className="h-px bg-gradient-to-r from-transparent via-black/8 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Strategic Advantages
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              How to Leverage the Product
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Motorized Resistance", desc: "Only motorized core training device on the market — creates a defensible category position with no direct competitors." },
              { title: "Data & Connectivity", desc: "Connected features enable subscription revenue, usage analytics, and integration with existing fitness platforms." },
              { title: "Scalable Difficulty", desc: "From rehabilitation patients to elite athletes — the same device serves the full spectrum of users across all LOBs." },
              { title: "Compact Footprint", desc: "Small form factor enables placement in space-constrained environments — cruise ships, hotel rooms, corporate offices." },
              { title: "Visual Impact", desc: "The device is a conversation piece on any gym floor — drives organic marketing and member engagement." },
              { title: "Multi-Channel Revenue", desc: "Hardware sale + subscription + accessories + content licensing = multiple revenue streams per unit sold." },
            ].map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl border border-black/[0.15] bg-white hover:border-[#C9A962]/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-8 h-8 rounded-lg bg-[#C9A962]/10 flex items-center justify-center mb-4">
                  <span className="font-display text-sm font-bold text-[#C9A962]">{i + 1}</span>
                </div>
                <h3 className="font-display text-lg font-semibold text-black mb-2">{point.title}</h3>
                <p className="font-body text-sm text-black/60">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section id="recommendations" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              WEG Recommendations
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Strategic Recommendations
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border-2 border-dashed border-[#C9A962]/30 bg-white text-center max-w-4xl mx-auto"
          >
            <Lightbulb className="w-10 h-10 text-[#C9A962] mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-black mb-2">Recommendations Pending</h3>
            <p className="font-body text-sm text-black/50">
              This section will be populated with WEG's strategic recommendations following the complete product analysis and LOB strategy review.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
