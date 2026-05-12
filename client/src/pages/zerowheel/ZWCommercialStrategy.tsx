/**
 * ZeroWheel Commercial Strategy Page
 * Pricing strategy, dealer terms, margin analysis, and commercial framework
 */

import { motion } from "framer-motion";
import { DollarSign, TrendingUp, Store, Users, Percent, Calculator, FileText, ArrowRight, CheckCircle2, Lightbulb, BarChart3, Layers, Building2, ShieldCheck, Tag } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import NextPageCTA from "@/components/NextPageCTA";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Overview" },
  { id: "pricing-tiers", label: "Pricing Architecture" },
  { id: "dealer-terms", label: "Channel Partners" },
  { id: "margin-analysis", label: "Margin Analysis" },
  { id: "revenue-model", label: "Revenue Model" },
  { id: "commercial-terms", label: "Commercial Terms" },
  { id: "negotiation-rules", label: "Negotiation Rules" },
  { id: "gtm-priorities", label: "Phase 1 Priorities" },
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
          
          eyebrow="WEG Proposed Commercial Framework"
          title="Pricing, Terms & Revenue Architecture"
          description="WEG's recommended commercial framework for ZeroWheel market entry — anchored to a $1,095 MSRP with structured margin-off-list pricing across Commercial and Vertical market categories. The 60% blended GM target is an idealized benchmark achieved through scale and optimization; DTC remains at full list price to protect the margin floor. Price floor: $695."
          stats={[
            { value: "$1,095", label: "MSRP / List Price" },
            { value: "60%", label: "Blended GM (All Channels)", sublabel: "Idealized target at scale" },
            { value: "$695", label: "Price Floor" },
          ]}
        />
      </div>

      {/* Pricing Architecture */}
      <section id="pricing-tiers" className="py-18 bg-white">
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
              Pricing Architecture
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Margin-Off-List Pricing Strategy
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto">
              All pricing is anchored to the $1,095 MSRP. Three market categories — Consumer (full list), Vertical, and Commercial — each with structured discount points off list. Maximum discount thresholds — do not exceed. GSA best pricing: $694.
            </motion.p>
          </motion.div>

          {/* MSRP Anchor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto mb-8"
          >
            <div className="p-6 rounded-2xl border border-[#B8860B] bg-[#B8860B]/5 flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#B8860B]/15 flex items-center justify-center">
                  <Tag className="w-6 h-6 text-[#B8860B]" />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#B8860B] tracking-wider uppercase">MSRP / List Price</span>
                  <div className="font-display text-3xl font-bold text-black">$1,095</div>
                </div>
              </div>
              <div className="flex items-center gap-6 text-center">
                <div>
                  <span className="font-mono text-[10px] text-black/55 tracking-wider uppercase block">DTC Retail</span>
                  <span className="font-display text-lg font-bold text-black">$1,095</span>
                  <span className="font-body text-xs text-black/55 block">0% off list (full MSRP)</span>
                </div>
                <div className="w-px h-10 bg-black/10" />
                <div>
                  <span className="font-mono text-[10px] text-black/55 tracking-wider uppercase block">Vertical Markets</span>
                  <span className="font-display text-lg font-bold text-black">$825</span>
                  <span className="font-body text-xs text-black/55 block">max 25% off list (do not exceed)</span>
                </div>
                <div className="w-px h-10 bg-black/10" />
                <div>
                  <span className="font-mono text-[10px] text-black/55 tracking-wider uppercase block">Commercial Markets</span>
                  <span className="font-display text-lg font-bold text-black">$695</span>
                  <span className="font-body text-xs text-black/55 block">max 40% off list (do not exceed)</span>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full">
                <ShieldCheck className="w-4 h-4 text-[#B8860B]" />
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
                  "Sports performance facilities",
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
                    ? "border-[#B8860B] bg-[#FAFAF8] shadow-md"
                    : "border-[#B8860B]/40 bg-white"
                }`}
              >
                {tier.highlight && (
                  <span className="inline-block font-mono text-[10px] text-[#B8860B] tracking-wider uppercase bg-[#B8860B]/10 px-3 py-1 rounded-full mb-4">
                    Highest Margin
                  </span>
                )}
                <tier.icon className="w-8 h-8 text-[#B8860B] mb-4" />
                <h3 className="font-display text-lg font-semibold text-black mb-1">{tier.tier}</h3>
                <div className="flex items-baseline gap-2 mb-1">
                  <span className="font-display text-3xl font-bold text-black">{tier.price}</span>
                  <span className="font-body text-sm text-black/55">{tier.unit}</span>
                </div>
                <span className="inline-block font-mono text-[10px] text-[#B8860B] tracking-wider bg-[#B8860B]/10 px-2 py-0.5 rounded-full mb-4">
                  {tier.discount}
                </span>
                <ul className="space-y-2 mb-4">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-black/65">
                      <CheckCircle2 className="w-4 h-4 text-[#B8860B] mt-0.5 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <p className="font-body text-xs text-black/55 italic border-t border-[#B8860B]/55 pt-3">{tier.note}</p>
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
            <div className="rounded-2xl border border-[#B8860B]/40 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#FAFAF8] border-b border-[#B8860B]/40">
                    <th className="text-left p-4 font-mono text-xs text-black/65 tracking-wider uppercase">Market Category</th>
                    <th className="text-right p-4 font-mono text-xs text-black/65 tracking-wider uppercase">Points Off List</th>
                    <th className="text-right p-4 font-mono text-xs text-black/65 tracking-wider uppercase">Net Price</th>
                    <th className="text-right p-4 font-mono text-xs text-black/65 tracking-wider uppercase">Discount $</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { category: "DTC / Full Retail", points: "0%", net: "$1,095", savings: "—", highlight: true },
                    { category: "Vertical Markets (Medical, Hospitality, Corporate, Gov)", points: "25%", net: "$825", savings: "$275", highlight: false },
                    { category: "Commercial Markets (Clubs, Sports Performance, Dealers)", points: "40%", net: "$695", savings: "$400", highlight: false },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-[#B8860B]/40 last:border-0 ${row.highlight ? "bg-[#B8860B]/5" : ""}`}>
                      <td className="p-4 font-body text-sm text-black/80 font-medium">{row.category}</td>
                      <td className="p-4 text-right font-display text-sm font-semibold text-black">{row.points}</td>
                      <td className="p-4 text-right font-display text-sm font-bold text-[#B8860B]">{row.net}</td>
                      <td className="p-4 text-right font-body text-sm text-black/65">{row.savings}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-body text-xs text-black/50 mt-3 text-center italic">
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
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
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
                  { label: "Verticals", value: "Medical, Hospitality, Corporate, Gov" },
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
                className="p-8 rounded-2xl border border-[#B8860B]/40 bg-white hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-1">
                  <card.icon className="w-6 h-6 text-[#B8860B]" />
                  <h3 className="font-display text-lg font-semibold text-black">{card.title}</h3>
                </div>
                <p className="font-mono text-[10px] text-[#B8860B] tracking-wider uppercase mb-5">{card.subtitle}</p>
                <div className="space-y-3">
                  {card.items.map((item, j) => (
                    <div key={j} className="flex items-center justify-between py-2 border-b border-[#B8860B]/40 last:border-0">
                      <span className="font-body text-sm text-black/70">{item.label}</span>
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
          <div className="h-px bg-gradient-to-r from-transparent via-[#B8860B]/25 to-transparent mb-18" />

          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
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
            <div className="rounded-2xl border border-[#B8860B]/40 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[#FAFAF8] border-b border-[#B8860B]/40">
                    <th className="text-left p-4 font-mono text-xs text-black/65 tracking-wider uppercase">Channel</th>
                    <th className="text-right p-4 font-mono text-xs text-black/65 tracking-wider uppercase">Off List</th>
                    <th className="text-right p-4 font-mono text-xs text-black/65 tracking-wider uppercase">Revenue</th>
                    <th className="text-right p-4 font-mono text-xs text-black/65 tracking-wider uppercase">COGS</th>
                    <th className="text-right p-4 font-mono text-xs text-black/65 tracking-wider uppercase">Gross Profit</th>
                    <th className="text-right p-4 font-mono text-xs text-black/65 tracking-wider uppercase">Margin</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { channel: "DTC (Full Retail)", offList: "0%", revenue: "$1,095", cogs: "$350", profit: "$745", margin: "68.0%", highlight: true },
                    { channel: "Vertical — Medical / Longevity", offList: "25%", revenue: "$825", cogs: "$350", profit: "$475", margin: "57.6%", highlight: false },
                    
                    { channel: "Vertical — Hospitality & Amenities", offList: "25%", revenue: "$825", cogs: "$340", profit: "$485", margin: "58.8%", highlight: false },
                    { channel: "Vertical — Cruise & Maritime", offList: "25%", revenue: "$825", cogs: "$340", profit: "$485", margin: "58.8%", highlight: false },
                    { channel: "Vertical — Corporate Wellness", offList: "25%", revenue: "$825", cogs: "$350", profit: "$475", margin: "57.6%", highlight: false },
                    { channel: "GSA — Military & Government", offList: "~37%", revenue: "$694", cogs: "$330", profit: "$364", margin: "52.4%", highlight: false },
                    { channel: "Commercial — Sports Performance", offList: "40%", revenue: "$695", cogs: "$330", profit: "$365", margin: "52.5%", highlight: false },
                    { channel: "Commercial — Clubs & Fitness", offList: "40%", revenue: "$695", cogs: "$330", profit: "$365", margin: "52.5%", highlight: false },
                    { channel: "Commercial — Authorized Dealers", offList: "40%", revenue: "$695", cogs: "$330", profit: "$365", margin: "52.5%", highlight: false },
                    { channel: "Commercial — Distributors / Resellers", offList: "40%", revenue: "$695", cogs: "$320", profit: "$375", margin: "54.0%", highlight: false },
                  ].map((row, i) => (
                    <tr key={i} className={`border-b border-[#B8860B]/40 last:border-0 ${row.highlight ? "bg-[#B8860B]/5" : ""}`}>
                      <td className="p-4 font-body text-sm text-black/80 font-medium">{row.channel}</td>
                      <td className="p-4 text-right font-mono text-xs text-black/65">{row.offList}</td>
                      <td className="p-4 text-right font-display text-sm font-semibold text-black">{row.revenue}</td>
                      <td className="p-4 text-right font-body text-sm text-black/65">{row.cogs}</td>
                      <td className="p-4 text-right font-display text-sm font-semibold text-emerald-600">{row.profit}</td>
                      <td className="p-4 text-right font-display text-sm font-bold text-[#B8860B]">{row.margin}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="font-body text-xs text-black/50 mt-3 text-center italic">
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
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
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
                className="p-6 rounded-2xl border border-[#B8860B]/40 bg-white hover:shadow-lg transition-all duration-300 text-center"
              >
                <stream.icon className="w-8 h-8 text-[#B8860B] mx-auto mb-3" />
                <h3 className="font-display text-lg font-semibold text-black mb-1">{stream.title}</h3>
                <span className="inline-block font-mono text-xs text-[#B8860B] tracking-wider bg-[#B8860B]/10 px-2 py-0.5 rounded-full mb-3">{stream.value}</span>
                <p className="font-body text-sm text-black/70">{stream.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commercial Terms */}
      <section id="commercial-terms" className="py-18 bg-white">
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
            className="p-8 rounded-2xl border-2 border-dashed border-[#B8860B]/40 bg-[#FAFAF8] text-center max-w-4xl mx-auto"
          >
            <Lightbulb className="w-10 h-10 text-[#B8860B] mx-auto mb-4" />
            <h3 className="font-display text-xl font-semibold text-black mb-2">Commercial Terms Workspace</h3>
            <p className="font-body text-sm text-black/65">
              This section is reserved for detailed commercial terms, contract templates, payment schedules, warranty terms, and return policies — to be developed as the commercial strategy is finalized.
            </p>
          </motion.div>
        </div>
      </section>
      {/* Pricing Discipline & Negotiation Rules */}
      <section id="negotiation-rules" className="py-18 bg-white">
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
              Pricing Discipline
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 mb-5 text-black">
              Negotiation Guidelines
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/70 max-w-2xl mx-auto">
              Five non-negotiable rules that protect brand value, margin integrity, and channel harmony across all market categories.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#B8860B]/40 bg-white p-8 shadow-[0_2px_12px_rgba(184,134,11,0.05)] max-w-5xl mx-auto"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#B8860B]/10 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#B8860B]" />
              </div>
              <h3 className="font-display text-xl font-semibold text-black">5 Rules of Pricing Discipline</h3>
            </div>
            <div className="space-y-5">
              {[
                {
                  rule: "Retail / DTC is Zero Discount",
                  detail: "Consumer pricing holds at full MSRP ($1,095) across all direct channels — e-commerce, social, retail, and influencer. No exceptions. This protects brand positioning and establishes the price anchor for all downstream negotiations.",
                },
                {
                  rule: "GSA Must Be $1 Below Best Commercial Pricing",
                  detail: "Federal procurement regulations require that GSA Schedule pricing reflects the best available commercial price. ZeroWheel's GSA price of $694 is set $1 below the commercial floor to satisfy this requirement while maintaining maximum margin.",
                },
                {
                  rule: "Discounts Are Floor Thresholds — Not Starting Points",
                  detail: "The listed discount percentages (25% Vertical, 40% Commercial) represent maximum allowable discounts — do-not-exceed ceilings. Every negotiation should aim to close above the floor. The floor is the last resort, not the default.",
                },
                {
                  rule: "National Account Pricing Requires Margin Protection",
                  detail: "National accounts typically negotiate the deepest discounts. While volume justifies concessions, sales teams must protect margin by leveraging volume commitments, multi-year terms, and bundled services rather than simply lowering unit price.",
                },
                {
                  rule: "Factor Extended Warranties Into National Account Negotiations",
                  detail: "Large accounts often require extended warranty coverage beyond the standard term. Build warranty cost into the deal structure upfront — do not offer best pricing and then absorb warranty obligations separately.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className="w-7 h-7 rounded-full bg-[#B8860B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="font-mono text-xs font-bold text-[#B8860B]">{i + 1}</span>
                  </div>
                  <div>
                    <p className="font-display text-sm font-semibold text-black mb-0.5">{item.rule}</p>
                    <p className="font-body text-xs text-black/70 leading-relaxed">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Phase 1 GTM Priorities */}
      <section id="gtm-priorities" className="py-18 bg-[#FAFAF8]">
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
              Go-To-Market Plan
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl md:text-5xl font-medium mt-4 text-black">
              Phase 1 Priorities
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                title: "Anchor Placement in Premium Clubs",
                description: "Secure flagship placements in 10–15 top-tier private clubs and fitness centers to establish credibility, generate case studies, and create organic demand from member exposure.",
              },
              {
                title: "Leverage Pro Sports Validation",
                description: "Activate existing relationships with professional teams and athletes. Athlete endorsements and team adoption create top-down demand across every downstream channel.",
              },
              {
                title: "Medical Channel Development",
                description: "Position the device as a clinical-grade rehabilitation tool. Partner with physical therapy networks and longevity centers to build medical credibility that unlocks institutional procurement.",
              },
              {
                title: "Hospitality & Maritime Expansion",
                description: "Deploy through OneSpaWorld's 144-vessel network and premium hotel partnerships. Small footprint and connected technology make it ideal for space-constrained environments.",
              },
              {
                title: "Build Sales Infrastructure",
                description: "Develop dedicated sales personnel and channel partner training programs. Create product demonstration kits, ROI calculators, and facility integration guides for each vertical.",
              },
              {
                title: "Activate Corporate Wellness Pipeline",
                description: "Target Fortune 500 wellness programs addressing the #1 workplace injury (lower back pain). Gamified engagement and measurable ROI position ZeroWheel as the antidote to the desk chair.",
              },
            ].map((focus, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileHover={{ y: -3, boxShadow: "0 8px 24px rgba(0,0,0,0.06)" }}
                className="flex gap-4 items-start p-5 rounded-xl bg-white border border-[#B8860B]/40 hover:border-[#B8860B]/60 hover:shadow-lg transition-all duration-300 shadow-[0_2px_8px_rgba(0,0,0,0.02)]"
              >
                <div className="w-7 h-7 rounded-full bg-[#B8860B]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-[#B8860B]" />
                </div>
                <div>
                  <h3 className="font-display text-base font-semibold text-black mb-1.5">{focus.title}</h3>
                  <p className="font-body text-sm text-black/70 leading-relaxed">{focus.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <NextPageCTA label="Strategic Exercise" href="/gtm/zerowheel/strategic-markets" />
    </Layout>
  );
}
