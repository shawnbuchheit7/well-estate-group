import { motion } from "framer-motion";
import LightHero from "../../components/LightHero";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

export default function ZWB2B2C() {
  return (
    <div className="min-h-screen bg-white">
      <LightHero
        eyebrow="WEG Recommended Framework"
        title="B2B2C Distribution Strategy"
        description="WEG's recommended hybrid distribution model for ZeroWheel — leveraging B2B partnerships to reach end consumers by combining institutional placement with consumer engagement for maximum market penetration."
        stats={[
          { value: "3", label: "Distribution Tiers" },
          { value: "9", label: "Macro LOBs" },
          { value: "2x", label: "Revenue per Unit" },
          { value: "85%", label: "Retention Target" },
        ]}
      />

      {/* B2B2C Model Overview */}
      <section className="py-18 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <span className="font-mono text-[#C9A962] text-xs tracking-[0.25em] uppercase">The Model</span>
            <h2 className="font-display text-4xl mt-3 text-black">How B2B2C Works</h2>
            <p className="text-black/55 max-w-2xl mx-auto mt-4 leading-relaxed">
              ZeroWheel sells to businesses (clubs, facilities, teams) who then provide the product to their end consumers (members, patients, athletes) — creating a dual revenue stream.
            </p>
          </motion.div>

          {/* 3-Tier Flow */}
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row items-center justify-center gap-4 mb-20">
            {/* Tier 1: ZeroWheel */}
            <div className="bg-white border border-black/15 rounded-2xl p-8 text-center w-72 shadow-sm">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C9A962] font-semibold">Tier 1 — Manufacturer</span>
              <h3 className="font-display text-2xl mt-3 text-black">ZeroWheel</h3>
              <p className="text-black/50 text-sm mt-2">Product development, manufacturing, brand strategy</p>
            </div>

            <div className="text-[#C9A962] text-2xl font-light rotate-90 md:rotate-0">→</div>

            {/* Tier 2: B2B Partners */}
            <div className="bg-[#FAFAF8] border border-black/15 rounded-2xl p-8 text-center w-72 shadow-sm">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C9A962] font-semibold">Tier 2 — B2B Partners</span>
              <h3 className="font-display text-2xl mt-3 text-black">Clubs & Facilities</h3>
              <p className="text-black/50 text-sm mt-2">Purchase units, integrate into programming, drive member engagement</p>
            </div>

            <div className="text-[#C9A962] text-2xl font-light rotate-90 md:rotate-0">→</div>

            {/* Tier 3: End Consumer */}
            <div className="bg-[#F5F4F0] border border-[#C9A962]/30 rounded-2xl p-8 text-center w-72 shadow-sm">
              <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C9A962] font-semibold">Tier 3 — Consumer</span>
              <h3 className="font-display text-2xl mt-3 text-black">Members & Athletes</h3>
              <p className="text-black/50 text-sm mt-2">Experience the product, subscribe to digital content, purchase accessories</p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Revenue Streams per Tier */}
      <section className="py-18 px-6 bg-[#FAFAF8]">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span className="font-mono text-[#C9A962] text-xs tracking-[0.25em] uppercase">Revenue Architecture</span>
            <h2 className="font-display text-4xl mt-3 text-black">Multi-Layer Revenue Model</h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-8">
            {/* Hardware Revenue */}
            <div className="bg-white border border-black/15 rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#C9A962]/10 flex items-center justify-center mb-4">
                <span className="text-[#C9A962] text-xl">⬡</span>
              </div>
              <h3 className="font-display text-xl text-black mb-2">Hardware Sales</h3>
              <p className="text-black/50 text-sm mb-4">Unit sales across Vertical ($825) and Commercial ($695) market categories</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-black/60">MSRP / List Price</span>
                  <span className="font-semibold text-black">$1,095</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black/60">Vertical (max 25% off list)</span>
                  <span className="font-semibold text-black">$825</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black/60">Commercial (max 40% off list)</span>
                  <span className="font-semibold text-black">$695 (floor)</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black/60">Gross Margin</span>
                  <span className="font-semibold text-black">55–68%</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black/60">Year 1 Target</span>
                  <span className="font-semibold text-black">1,000 units</span>
                </div>
              </div>
            </div>

            {/* Subscription Revenue */}
            <div className="bg-white border border-black/15 rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#C9A962]/10 flex items-center justify-center mb-4">
                <span className="text-[#C9A962] text-xl">∞</span>
              </div>
              <h3 className="font-display text-xl text-black mb-2">Consumer Subscriptions</h3>
              <p className="text-black/50 text-sm mb-4">End-user digital content and training programs</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-black/60">Monthly Price</span>
                  <span className="font-semibold text-black">$19.99/mo</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black/60">Annual Option</span>
                  <span className="font-semibold text-black">$199/yr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black/60">LTV per User</span>
                  <span className="font-semibold text-black">$480+</span>
                </div>
              </div>
            </div>

            {/* Accessory & Licensing */}
            <div className="bg-white border border-black/15 rounded-2xl p-8 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#C9A962]/10 flex items-center justify-center mb-4">
                <span className="text-[#C9A962] text-xl">◈</span>
              </div>
              <h3 className="font-display text-xl text-black mb-2">Accessories & Licensing</h3>
              <p className="text-black/50 text-sm mb-4">Ancillary products and content licensing to partners</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span className="text-black/60">Accessory Rev.</span>
                  <span className="font-semibold text-black">15–20% of HW</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black/60">Licensing Fee</span>
                  <span className="font-semibold text-black">$2,500–$10K/yr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-black/60">Margin</span>
                  <span className="font-semibold text-black">80%+</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* B2B2C by Vertical */}
      <section className="py-18 px-6">
        <motion.div
          className="max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span className="font-mono text-[#C9A962] text-xs tracking-[0.25em] uppercase">Vertical Playbooks</span>
            <h2 className="font-display text-4xl mt-3 text-black">B2B2C by Market Vertical</h2>
            <p className="text-black/55 max-w-2xl mx-auto mt-4 leading-relaxed">
              Each vertical has a unique B2B2C dynamic — different buyer, different end-user, different revenue mix.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-black/15">
                  <th className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40 py-4 pr-6">Vertical</th>
                  <th className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40 py-4 pr-6">B2B Buyer</th>
                  <th className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40 py-4 pr-6">End Consumer</th>
                  <th className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40 py-4 pr-6">Revenue Model</th>
                  <th className="font-mono text-[10px] tracking-[0.2em] uppercase text-black/40 py-4">Consumer LTV</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { vertical: "Private Clubs", buyer: "Fitness Director (Golf Pro, GM, Board)", consumer: "Club Members", model: "Hardware + Member Subscription", ltv: "$600+" },
                  { vertical: "Commercial Fitness", buyer: "Corporate Procurement / Owner-Operators", consumer: "Gym Members", model: "Hardware + Content License", ltv: "$400+" },
                  { vertical: "Medical & Rehab", buyer: "Clinical Rehab Director / Owner-Operators", consumer: "Patients", model: "Hardware + Rx Subscription", ltv: "$1,200+" },
                  { vertical: "Direct-to-Consumer", buyer: "Direct (E-commerce)", consumer: "Home User", model: "Hardware + Subscription + Accessories", ltv: "$700+" },
                  { vertical: "Corporate Wellness", buyer: "Wellness Program Manager / HR Director", consumer: "Employees", model: "Hardware + Engagement Platform", ltv: "$500+" },
                  { vertical: "Professional Sports", buyer: "Director of S&C", consumer: "Athletes", model: "Hardware + Data Analytics", ltv: "$800+" },
                  { vertical: "Hospitality & Amenities", buyer: "Management Co / Fitness & Spa Directors", consumer: "Guests & Residents", model: "Hardware + In-Room Wellness", ltv: "$300+" },
                  { vertical: "Military & Government", buyer: "TSAC-F / Police & Fire Chiefs / Dir. of Rec", consumer: "Service Members & Community", model: "Hardware + Maintenance Contract", ltv: "$500+" },
                  { vertical: "Cruise & Maritime", buyer: "VP Onboard / VP Newbuild / Mgmt Co", consumer: "Passengers & Crew", model: "Hardware + In-Cabin Wellness", ltv: "$250+" },
                ].map((row, i) => (
                  <tr key={i} className="border-b border-black/8 hover:bg-[#FAFAF8] transition-colors">
                    <td className="py-4 pr-6 font-semibold text-black text-sm">{row.vertical}</td>
                    <td className="py-4 pr-6 text-black/60 text-sm">{row.buyer}</td>
                    <td className="py-4 pr-6 text-black/60 text-sm">{row.consumer}</td>
                    <td className="py-4 pr-6 text-black/60 text-sm">{row.model}</td>
                    <td className="py-4 text-black font-semibold text-sm">{row.ltv}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </motion.div>
      </section>

      {/* Consumer Engagement Flywheel */}
      <section className="py-18 px-6 bg-[#FAFAF8]">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span className="font-mono text-[#C9A962] text-xs tracking-[0.25em] uppercase">Engagement</span>
            <h2 className="font-display text-4xl mt-3 text-black">Consumer Engagement Flywheel</h2>
            <p className="text-black/55 max-w-2xl mx-auto mt-4 leading-relaxed">
              The B2B2C model creates a self-reinforcing cycle — institutional placement drives consumer discovery, consumer engagement drives retention, and retention drives recurring revenue.
            </p>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Placement", desc: "Units installed at partner facilities — high-traffic, high-visibility locations" },
              { step: "02", title: "Discovery", desc: "Members and guests experience the product during workouts and sessions" },
              { step: "03", title: "Conversion", desc: "Users subscribe to digital content, purchase accessories, track progress" },
              { step: "04", title: "Retention", desc: "Data-driven engagement, community features, and progressive training keep users active" },
            ].map((item, i) => (
              <div key={i} className="bg-white border border-black/15 rounded-2xl p-6 text-center shadow-sm">
                <span className="font-mono text-[#C9A962] text-2xl font-bold">{item.step}</span>
                <h3 className="font-display text-lg mt-3 text-black">{item.title}</h3>
                <p className="text-black/50 text-sm mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* Key Metrics */}
      <section className="py-18 px-6">
        <motion.div
          className="max-w-5xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-14">
            <span className="font-mono text-[#C9A962] text-xs tracking-[0.25em] uppercase">Targets</span>
            <h2 className="font-display text-4xl mt-3 text-black">B2B2C Success Metrics</h2>
          </motion.div>

          <motion.div variants={fadeInUp} className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-black/15 rounded-2xl p-8 shadow-sm">
              <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C9A962] mb-4">B2B Metrics</h3>
              <div className="space-y-4">
                {[
                  { metric: "Partner Acquisition Rate", target: "15–20 new partners/quarter" },
                  { metric: "Avg. Units per Partner", target: "5–12 units" },
                  { metric: "Partner Retention", target: "90%+ annual renewal" },
                  { metric: "Reorder Rate", target: "40% within 12 months" },
                  { metric: "Net Promoter Score (B2B)", target: "70+" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-black/6">
                    <span className="text-black/60 text-sm">{item.metric}</span>
                    <span className="font-semibold text-black text-sm">{item.target}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-black/15 rounded-2xl p-8 shadow-sm">
              <h3 className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#C9A962] mb-4">Consumer Metrics</h3>
              <div className="space-y-4">
                {[
                  { metric: "Consumer Conversion Rate", target: "12–18% of facility users" },
                  { metric: "Subscription Attach Rate", target: "35%+ of active users" },
                  { metric: "Monthly Active Users", target: "60%+ of subscribers" },
                  { metric: "Churn Rate", target: "<5% monthly" },
                  { metric: "Net Promoter Score (Consumer)", target: "65+" },
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center py-2 border-b border-black/6">
                    <span className="text-black/60 text-sm">{item.metric}</span>
                    <span className="font-semibold text-black text-sm">{item.target}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
