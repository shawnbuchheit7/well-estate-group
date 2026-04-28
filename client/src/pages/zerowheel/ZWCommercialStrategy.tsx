/**
 * ZeroWheel Commercial Strategy Page
 * Pricing strategy, dealer terms, margin analysis, and commercial framework
 */

import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Store, Users, Percent, Calculator, FileText, ArrowRight, CheckCircle2, Lightbulb, BarChart3, Layers, Building2, ShieldCheck, Tag } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "pricing-tiers", label: "Pricing Architecture" },
  { id: "dealer-terms", label: "Channel Partners" },
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
          eyebrow="WEG Proposed Commercial Framework"
          title="Pricing, Terms & Revenue Architecture"
          description="WEG's recommended commercial framework for ZeroWheel market entry — anchored to a $1,095 MSRP with structured margin-off-list pricing across Commercial and Vertical market categories. Price floor: $695."
          stats={[
            { value: "$1,095", label: "MSRP / List Price" },
            { value: "55%+", label: "Target Gross Margin" },
            { value: "$695", label: "Price Floor" },
          ]}
        />
      </div>

      {/* Pricing Architecture */}
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
              Margin-Off-List Pricing Strategy
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              All pricing is anchored to the $1,095 MSRP. Two distinct market categories — Commercial and Vertical — each with structured discount points off list. Maximum discount thresholds — do not exceed. GSA best pricing: $694.
            </motion.p>
          </motion.div>

          {/* MSRP Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-8"
          >
            <div className="p-6 rounded-2xl border-2 border-[#C9A962] bg-[#C9A962]/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#C9A962]/15 flex items-center justify-center">
                  <Tag className="w-6 h-6 text-[#C9A962]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#C9A962] tracking-wider uppercase">MSRP / List Price</span>
                  <div className="font-display text-3xl font-bold text-black">$1,095</div>
                </div>
              </div>
              <div className="flex items-center gap-6 text-center">
                <div>
                  <span className="font-mono text-[10px] text-black/40 tracking-wider uppercase block">DTC Retail</span>
                  <span className="font-display text-lg font-bold text-black">$1,095</span>
                  <span className="font-body text-xs text-black/40 block">0% off list (full MSRP)</span>
                </div>
                <div className="w-px h-10 bg-black/10" />
                <div>
                  <span className="font-mono text-[10px] text-black/40 tracking-wider uppercase block">Vertical Markets</span>
                  <span className="font-display text-lg font-bold text-black">$825</span>
                  <span className="font-body text-xs text-black/40 block">max 25% off list (do not exceed)</span>
                </div>
                <div className="w-px h-10 bg-black/10" />
                <div>
                  <span className="font-mono text-[10px] text-black/40 tracking-wider uppercase block">Commercial Markets</span>
                  <span className="font-display text-lg font-bold text-black">$695</span>
                  <span className="font-body text-xs text-black/40 block">max 40% off list (do not exceed)</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full">
                <ShieldCheck className="w-4 h-4 text-[#C9A962]" />
                <span className="font-mono text-xs text-black/60">Floor: $695</span>
              </div>
            </div>
          </motion.div>

          {/* Three Tier Cards */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                tier: "Direct-to-Consumer",
                price: "$1,095",
                unit: "full list price",
                discount: "0% off list (full MSRP)",
                icon: Users,
                highlight: true,
                features: [
                  "Full MSRP — highest margin channel",
                  "Premium unboxing experience",
                  "White-glove delivery option (+$149)",
                  "30-day satisfaction guarantee",
                  "1-year warranty included",
                  "Free app subscription (3 months)",
                ],
                note: "MAP pricing enforced across all channels at $1,095",
              },
              {
                tier: "Vertical Markets",
                price: "$825",
                unit: "max 25 points off list",
                discount: "max 25% off MSRP",
                icon: Building2,
                highlight: false,
                features: [
                  "Medical & longevity clinics",
                  "Sports performance facilities",
                  "Hospitality & luxury resorts",
                  "Cruise & maritime",
                  "Corporate wellness programs",
                  "Net 30 terms · Dedicated account mgr",
                ],
                note: "Max discount: 25% off list (do not exceed) — specialized verticals with high brand alignment",
              },
              {
                tier: "Commercial Markets",
                price: "$695",
                unit: "max 40 points off list",
                discount: "max 40% off MSRP",
                icon: Store,
                highlight: false,
                features: [
                  "Health clubs & fitness centers",
                  "Authorized dealers & retailers",
                  "Regional distributors",
                  "Reseller partners",
                  "Minimum order: 10 units",
                  "MAP pricing strictly enforced",
                ],
                note: "Price floor — no channel goes below $695 under any circumstance",
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
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display text-3xl font-bold text-black">{tier.price}</span>
                  <span className="font-body text-sm text-black/40">{tier.unit}</span>
                </div>
                <span className="inline-block font-mono text-[10px] text-[#C9A962] tracking-wider bg-[#C9A962]/10 px-2 py-0.5 rounded-full mb-4">
                  {tier.discount}
                </span>
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

          {/* Discount Structure Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mt-8"
          >
            <div className="rounded-2xl border border-black/[0.15] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#FAFAF8] border-b border-black/[0.10]">
                    <th className="text-left p-4 font-mono text-xs text-black/50 tracking-wider uppercase">Market Category</th>
                    <th className="text-right p-4 font-mono text-xs text-black/50 tracking-wider uppercase">Points Off List</th>
                    <th className="text-right p-4 font-mono text-xs text-black/50 tracking-wider uppercase">Net Price</th>
                    <th className="text-right p-4 font-mono text-xs text-black/50 tracking-wider uppercase">Discount $</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { category: "DTC / Full Retail", points: "0%", net: "$1,095", savings: "—", highlight: true },
                    { category: "Vertical Markets (Medical, Sports, Hospitality, Gov)", points: "25%", net: "$825", savings: "$275", highlight: false },
                    { category: "Commercial Markets (Clubs, Dealers, Resellers)", points: "40%", net: "$695", savings: "$400", highlight: false },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-black/[0.06] last:border-0 ${row.highlight ? "bg-[#C9A962]/5" : ""}`}>
                      <td className="p-4 font-body text-sm text-black/80 font-medium">{row.category}</td>
                      <td className="p-4 text-right font-display text-sm font-semibold text-black">{row.points}</td>
                      <td className="p-4 text-right font-display text-sm font-bold text-[#C9A962]">{row.net}</td>
                      <td className="p-4 text-right font-body text-sm text-black/50">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-body text-xs text-black/35 mt-3 text-center italic">
              All pricing expressed as margin points off the $1,095 MSRP. Price floor of $695 applies to all channels — no exceptions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Channel Partners */}
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
              Commercial & Vertical Partner Programs
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Structured partner programs for both market categories — each with distinct pricing, terms, and margin structures anchored to the $1,095 list price.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {[
              {
                title: "Vertical Market Partners",
                subtitle: "max 25% off list (do not exceed) — $825/unit",
                icon: Building2,
                items: [
                  { label: "Partner Price", value: "$825/unit" },
                  { label: "Discount Off List", value: "25% (275 pts)" },
                  { label: "MAP Retail Price", value: "$1,095" },
                  { label: "Partner Margin at MAP", value: "~25%" },
                  { label: "Payment Terms", value: "Net 30" },
                  { label: "Verticals", value: "Medical, Sports, Hospitality, Gov" },
                ],
              },
              {
                title: "Authorized Dealer Program",
                subtitle: "max 40% off list (do not exceed) — $695/unit (floor)",
                icon: Store,
                items: [
                  { label: "Wholesale Price", value: "$695/unit" },
                  { label: "Discount Off List", value: "40% (400 pts)" },
                  { label: "MAP Retail Price", value: "$1,095" },
                  { label: "Dealer Margin at MAP", value: "~36%" },
                  { label: "Payment Terms", value: "Net 30" },
                  { label: "Minimum Order", value: "10 units" },
                ],
              },
              {
                title: "Regional Distributors & Resellers",
                subtitle: "max 40% off list (do not exceed) — $695/unit (floor)",
                icon: Layers,
                items: [
                  { label: "Wholesale Price", value: "$695/unit" },
                  { label: "Discount Off List", value: "40% (400 pts)" },
                  { label: "Minimum Order", value: "25 units" },
                  { label: "Annual Commitment", value: "100+ units" },
                  { label: "Payment Terms", value: "Net 45" },
                  { label: "Territory Protection", value: "Negotiable" },
                ],
              },
              {
                title: "Program Requirements",
                subtitle: "All partner tiers",
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
                <div className="flex items-center gap-3 mb-1">
                  <card.icon className="w-6 h-6 text-[#C9A962]" />
                  <h3 className="font-display text-lg font-semibold text-black">{card.title}</h3>
                </div>
                <p className="font-mono text-[10px] text-[#C9A962] tracking-wider uppercase mb-5">{card.subtitle}</p>
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
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              Gross margin analysis across all market categories — from full-retail DTC through Commercial floor pricing.
            </motion.p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="rounded-2xl border border-black/[0.15] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#FAFAF8] border-b border-black/[0.10]">
                    <th className="text-left p-4 font-mono text-xs text-black/50 tracking-wider uppercase">Channel</th>
                    <th className="text-right p-4 font-mono text-xs text-black/50 tracking-wider uppercase">Off List</th>
                    <th className="text-right p-4 font-mono text-xs text-black/50 tracking-wider uppercase">Revenue</th>
                    <th className="text-right p-4 font-mono text-xs text-black/50 tracking-wider uppercase">COGS</th>
                    <th className="text-right p-4 font-mono text-xs text-black/50 tracking-wider uppercase">Gross Profit</th>
                    <th className="text-right p-4 font-mono text-xs text-black/50 tracking-wider uppercase">Margin</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { channel: "DTC (Full Retail)", offList: "0%", revenue: "$1,095", cogs: "$350", profit: "$745", margin: "68.0%", highlight: true },
                    { channel: "Vertical — Medical / Longevity", offList: "25%", revenue: "$825", cogs: "$350", profit: "$475", margin: "57.6%", highlight: false },
                    { channel: "Vertical — Sports Performance", offList: "25%", revenue: "$825", cogs: "$350", profit: "$475", margin: "57.6%", highlight: false },
                    { channel: "Vertical — Hospitality & Amenities", offList: "25%", revenue: "$825", cogs: "$340", profit: "$485", margin: "58.8%", highlight: false },
                    { channel: "Vertical — Cruise & Maritime", offList: "25%", revenue: "$825", cogs: "$340", profit: "$485", margin: "58.8%", highlight: false },
                    { channel: "Vertical — Corporate Wellness", offList: "25%", revenue: "$825", cogs: "$350", profit: "$475", margin: "57.6%", highlight: false },
                    { channel: "GSA — Military & Government", offList: "~37%", revenue: "$694", cogs: "$330", profit: "$364", margin: "52.4%", highlight: false },
                    { channel: "Commercial — Clubs & Fitness", offList: "40%", revenue: "$695", cogs: "$330", profit: "$365", margin: "52.5%", highlight: false },
                    { channel: "Commercial — Authorized Dealers", offList: "40%", revenue: "$695", cogs: "$330", profit: "$365", margin: "52.5%", highlight: false },
                    { channel: "Commercial — Distributors / Resellers", offList: "40%", revenue: "$695", cogs: "$320", profit: "$375", margin: "54.0%", highlight: false },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-black/[0.06] last:border-0 ${row.highlight ? "bg-[#C9A962]/5" : ""}`}>
                      <td className="p-4 font-body text-sm text-black/80 font-medium">{row.channel}</td>
                      <td className="p-4 text-right font-mono text-xs text-black/50">{row.offList}</td>
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
              COGS estimates include manufacturing, packaging, and shipping. All pricing anchored to $1,095 MSRP. Floor price: $695.
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
              { title: "Hardware Sales", icon: DollarSign, value: "Primary", desc: "Unit sales across DTC ($1,095), Vertical ($825), and Commercial ($695) market categories." },
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
