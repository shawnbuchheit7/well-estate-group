/*
 * ZeroWheel Commercial Strategy Page
 * Pricing strategy, dealer terms, margin analysis, and commercial framework
 */

import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Store, Users, Percent, Calculator, FileText, ArrowRight, CheckCircle2, Lightbulb, BarChart3, Layers, Building2 } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "pricing-tiers", label: "Pricing Tiers" },
  { id: "dealer-terms", label: "Dealer & Reseller" },
  { id: "margin-analysis", label: "Margin Analysis" },
  { id: "revenue-model", label: "Revenue Model" },
  { id: "commercial-terms", label: "Commercial Terms" },
];

export default function ZWCommercialStrategy() {
  return (
    <Layout section="gtm-zerowheel">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          logoSrc="https://files.manuscdn.com/user_upload_by_module/session_file/310519663219582709/VgVkPihMTEChPvmp.png"
          logoAlt="ZeroWheel"
          brandName="ZeroWheel"
          eyebrow="Commercial Strategy"
          title="Pricing, Terms & Revenue Architecture"
          description="The commercial framework for ZeroWheel market entry — covering multi-tier pricing strategy, dealer and reseller terms, margin analysis, and recurring revenue model design."
          stats={[
            { value: "3", label: "Pricing Tiers" },
            { value: "55%+", label: "Target Gross Margin" },
            { value: "$850", label: "Blended ASP" },
          ]}
        />
      </div>

      {/* Pricing Tiers */}
      <section id="pricing-tiers" className="py-18 bg-white">
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
              Pricing Architecture
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Multi-Tier Pricing Strategy
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Three distinct pricing tiers designed to maximize revenue across channels while protecting brand positioning and dealer margins.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                tier: "Direct-to-Consumer",
                price: "$995",
                unit: "per unit",
                icon: Users,
                highlight: true,
                features: [
                  "Full retail price — highest margin",
                  "Premium unboxing experience",
                  "White-glove delivery option (+$149)",
                  "30-day satisfaction guarantee",
                  "1-year warranty included",
                  "Free app subscription (3 months)",
                ],
                note: "MAP pricing enforced across all channels",
              },
              {
                tier: "B2B Institutional",
                price: "$750–$895",
                unit: "volume-tiered",
                icon: Building2,
                highlight: false,
                features: [
                  "5–24 units: $895/unit",
                  "25–99 units: $825/unit",
                  "100+ units: $750/unit",
                  "Net 30 payment terms",
                  "Dedicated account manager",
                  "Custom branding available",
                ],
                note: "Clubs, hotels, medical facilities, corporate",
              },
              {
                tier: "Dealer & Reseller",
                price: "$595–$695",
                unit: "wholesale",
                icon: Store,
                highlight: false,
                features: [
                  "Authorized dealers: $695/unit",
                  "Regional distributors: $645/unit",
                  "White-label partners: $595/unit",
                  "Minimum order: 10 units",
                  "MAP pricing enforced ($995 retail)",
                  "Co-op marketing fund (2%)",
                ],
                note: "Dealer margin: 30–40% at MAP",
              },
            ].map((tier, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-lg ${
                  tier.highlight
                    ? "border-[#C9A962] bg-[#FAFAF8] shadow-md"
                    : "border-black/[0.15] bg-white"
                }`}
              >
                {tier.highlight && (
                  <span className="inline-block font-mono text-[10px] text-[#C9A962] tracking-wider uppercase bg-[#C9A962]/10 px-3 py-1 rounded-full mb-4">
                    Highest Margin
                  </span>
                )}
                <tier.icon className="w-8 h-8 text-[#C9A962] mb-4" />
                <h3 className="font-display text-lg font-semibold text-black mb-1">{tier.tier}</h3>
                <div className="flex items-baseline gap-2 mb-4">
                  <span className="font-display text-3xl font-bold text-black">{tier.price}</span>
                  <span className="font-body text-sm text-black/40">{tier.unit}</span>
                </div>
                <ul className="space-y-2 mb-4">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-black/65">
                      <CheckCircle2 className="w-4 h-4 text-[#C9A962] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs text-black/40 italic border-t border-black/[0.08] pt-3">{tier.note}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dealer & Reseller Terms */}
      <section id="dealer-terms" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Channel Partners
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Dealer & Reseller Program
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Authorized Dealer Program",
                icon: Store,
                items: [
                  { label: "Wholesale Price", value: "$695/unit" },
                  { label: "Minimum Order", value: "10 units" },
                  { label: "MAP Retail Price", value: "$995" },
                  { label: "Dealer Margin", value: "~30%" },
                  { label: "Payment Terms", value: "Net 30" },
                  { label: "Territory Protection", value: "Available" },
                ],
              },
              {
                title: "Regional Distributor Program",
                icon: Layers,
                items: [
                  { label: "Wholesale Price", value: "$645/unit" },
                  { label: "Minimum Order", value: "50 units" },
                  { label: "Annual Commitment", value: "200+ units" },
                  { label: "Distributor Margin", value: "~35%" },
                  { label: "Payment Terms", value: "Net 45" },
                  { label: "Exclusive Territory", value: "Negotiable" },
                ],
              },
              {
                title: "White-Label Partners",
                icon: FileText,
                items: [
                  { label: "Wholesale Price", value: "$595/unit" },
                  { label: "Minimum Order", value: "100 units" },
                  { label: "Custom Branding", value: "Included" },
                  { label: "Partner Margin", value: "~40%" },
                  { label: "Payment Terms", value: "Net 30" },
                  { label: "Marketing Support", value: "Co-op fund" },
                ],
              },
              {
                title: "Program Requirements",
                icon: CheckCircle2,
                items: [
                  { label: "Application Process", value: "Required" },
                  { label: "Training Certification", value: "Mandatory" },
                  { label: "MAP Compliance", value: "Strictly enforced" },
                  { label: "Quarterly Reviews", value: "Performance-based" },
                  { label: "Co-op Marketing", value: "2% of purchases" },
                  { label: "Demo Unit", value: "1 per location" },
                ],
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl border border-black/[0.15] bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-5">
                  <card.icon className="w-6 h-6 text-[#C9A962]" />
                  <h3 className="font-display text-lg font-semibold text-black">{card.title}</h3>
                </div>
                <div className="space-y-3">
                  {card.items.map((item, j) => (
                    <div key={j} className="flex items-center justify-between py-2 border-b border-black/[0.06] last:border-0">
                      <span className="font-body text-sm text-black/55">{item.label}</span>
                      <span className="font-display text-sm font-semibold text-black">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Margin Analysis */}
      <section id="margin-analysis" className="py-18 bg-white">
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
              Unit Economics
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Margin Analysis by Channel
            </motion.h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-black/[0.15] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#FAFAF8] border-b border-black/[0.10]">
                    <th className="text-left p-4 font-mono text-xs text-black/50 tracking-wider uppercase">Channel</th>
                    <th className="text-right p-4 font-mono text-xs text-black/50 tracking-wider uppercase">Revenue</th>
                    <th className="text-right p-4 font-mono text-xs text-black/50 tracking-wider uppercase">COGS</th>
                    <th className="text-right p-4 font-mono text-xs text-black/50 tracking-wider uppercase">Gross Profit</th>
                    <th className="text-right p-4 font-mono text-xs text-black/50 tracking-wider uppercase">Margin</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { channel: "DTC (Full Retail)", revenue: "$995", cogs: "$350", profit: "$645", margin: "64.8%", highlight: true },
                    { channel: "B2B (5–24 units)", revenue: "$895", cogs: "$350", profit: "$545", margin: "60.9%", highlight: false },
                    { channel: "B2B (25–99 units)", revenue: "$825", cogs: "$340", profit: "$485", margin: "58.8%", highlight: false },
                    { channel: "B2B (100+ units)", revenue: "$750", cogs: "$330", profit: "$420", margin: "56.0%", highlight: false },
                    { channel: "Dealer (Authorized)", revenue: "$695", cogs: "$330", profit: "$365", margin: "52.5%", highlight: false },
                    { channel: "Distributor (Regional)", revenue: "$645", cogs: "$320", profit: "$325", margin: "50.4%", highlight: false },
                    { channel: "White-Label", revenue: "$595", cogs: "$310", profit: "$285", margin: "47.9%", highlight: false },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-black/[0.06] last:border-0 ${row.highlight ? "bg-[#C9A962]/5" : ""}`}>
                      <td className="p-4 font-body text-sm text-black/80 font-medium">{row.channel}</td>
                      <td className="p-4 text-right font-display text-sm font-semibold text-black">{row.revenue}</td>
                      <td className="p-4 text-right font-body text-sm text-black/50">{row.cogs}</td>
                      <td className="p-4 text-right font-display text-sm font-semibold text-emerald-600">{row.profit}</td>
                      <td className="p-4 text-right font-display text-sm font-bold text-[#C9A962]">{row.margin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-body text-xs text-black/35 mt-3 text-center italic">
              COGS estimates include manufacturing, packaging, and shipping. Actual costs may vary with volume.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Model */}
      <section id="revenue-model" className="py-18 bg-[#FAFAF8]">
        <div className="container">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-xs tracking-[0.2em] uppercase">
              Revenue Architecture
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Multi-Stream Revenue Model
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: "Hardware Sales", icon: DollarSign, value: "Primary", desc: "Unit sales across all 3 pricing tiers — DTC, B2B, and dealer/reseller channels." },
              { title: "Subscription Revenue", icon: TrendingUp, value: "$19.99/mo", desc: "Connected app subscription for workout programs, progress tracking, and virtual classes." },
              { title: "Accessory Revenue", icon: Layers, value: "15–20%", desc: "Complementary accessories and replacement parts — estimated at 15–20% of hardware revenue." },
              { title: "Content Licensing", icon: BarChart3, value: "B2B Add-on", desc: "Licensed content packages for institutional buyers — custom programming and branded experiences." },
            ].map((stream, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-2xl border border-black/[0.15] bg-white hover:shadow-lg transition-all duration-300 text-center"
              >
                <stream.icon className="w-8 h-8 text-[#C9A962] mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-black mb-1">{stream.title}</h3>
                <span className="inline-block font-mono text-xs text-[#C9A962] tracking-wider bg-[#C9A962]/10 px-2 py-0.5 rounded-full mb-3">{stream.value}</span>
                <p className="font-body text-sm text-black/55">{stream.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Terms */}
      <section id="commercial-terms" className="py-18 bg-white">
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
              Terms & Conditions
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Standard Commercial Terms
            </motion.h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl border-2 border-dashed border-[#C9A962]/30 bg-[#FAFAF8] text-center max-w-4xl mx-auto"
          >
            <Lightbulb className="w-10 h-10 text-[#C9A962] mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-black mb-2">Commercial Terms Workspace</h3>
            <p className="font-body text-sm text-black/50">
              This section is reserved for detailed commercial terms, contract templates, payment schedules, warranty terms, and return policies — to be developed as the commercial strategy is finalized.
            </p>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
