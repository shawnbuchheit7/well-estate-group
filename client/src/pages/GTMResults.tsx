/*
 * GTM Results & NPS Page - WEG Customer Satisfaction
 * Design: Super premium luxury — white/cream/gold, sharp contrast, refined typography
 */

import { motion } from "framer-motion";
import { Star, TrendingUp, Users, BarChart3, MessageSquare, ThumbsUp, ArrowRight, CheckCircle2, Award } from "lucide-react";
import Layout from "@/components/Layout";
import LightHero from "@/components/LightHero";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { SectionNav } from "@/components/SectionNav";

const sections = [
  { id: "hero", label: "Results" },
  { id: "nps", label: "NPS" },
  { id: "feedback", label: "Feedback" },
  { id: "methodology", label: "Methodology" },
  { id: "cta", label: "Get Started" },
];

export default function GTMResults() {
  return (
    <Layout section="gtm">
      <SectionNav sections={sections} />

      {/* Hero */}
      <div id="hero">
        <LightHero
          eyebrow="Proven Results"
          title="Results & Customer Satisfaction"
          description="Real-time customer feedback, Net Promoter Score tracking, and continuous improvement drive exceptional satisfaction and retention across every engagement."
          stats={[
            { value: "70+", label: "Target NPS" },
            { value: "3", label: "Feedback Loops" },
            { value: "100%", label: "Surveyed" },
            { value: "Weekly", label: "Reviews" },
          ]}
        />
      </div>

      {/* NPS Section */}
      <section id="nps" className="py-20 sm:py-24 bg-[#F9F9F7]">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Net Promoter Score
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Measuring What Matters
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/50 max-w-2xl mx-auto mt-4 leading-relaxed">
              NPS is the gold standard for measuring customer loyalty and predicting growth. 
              We implement real-time NPS tracking across every touchpoint.
            </motion.p>
          </motion.div>

          {/* NPS Scale Explanation */}
          <motion.div
            className="max-w-4xl mx-auto mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="bg-white border border-black/[0.10] rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.03),0_8px_24px_rgba(0,0,0,0.05)]">
              <h3 className="font-display text-lg font-bold text-black mb-6 text-center tracking-tight">Understanding NPS</h3>
              <div className="grid md:grid-cols-3 gap-5">
                <div className="text-center p-5 rounded-xl bg-red-50 border border-red-100">
                  <p className="font-display text-2xl font-bold text-red-500 mb-1">0–6</p>
                  <p className="font-display text-sm font-bold text-black mb-2">Detractors</p>
                  <p className="font-body text-xs text-black/45 leading-relaxed">Unhappy customers who can damage your brand through negative word-of-mouth</p>
                </div>
                <div className="text-center p-5 rounded-xl bg-amber-50 border border-amber-100">
                  <p className="font-display text-2xl font-bold text-amber-500 mb-1">7–8</p>
                  <p className="font-display text-sm font-bold text-black mb-2">Passives</p>
                  <p className="font-body text-xs text-black/45 leading-relaxed">Satisfied but unenthusiastic customers vulnerable to competitive offerings</p>
                </div>
                <div className="text-center p-5 rounded-xl bg-emerald-50 border border-emerald-100">
                  <p className="font-display text-2xl font-bold text-emerald-500 mb-1">9–10</p>
                  <p className="font-display text-sm font-bold text-black mb-2">Promoters</p>
                  <p className="font-body text-xs text-black/45 leading-relaxed">Loyal enthusiasts who will fuel growth through referrals and repeat purchases</p>
                </div>
              </div>
              <div className="mt-6 text-center border-t border-black/[0.06] pt-5">
                <p className="font-body text-sm text-black/50">
                  <span className="font-semibold text-black">NPS = % Promoters − % Detractors</span> &nbsp;|&nbsp; 
                  Industry average: 30–40 &nbsp;|&nbsp; World-class: 70+
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Key NPS Metrics */}
          <motion.div
            className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              {
                icon: ThumbsUp,
                title: "Customer NPS",
                description: "Tracking satisfaction across every service interaction and touchpoint to ensure consistently exceptional experiences.",
              },
              {
                icon: Users,
                title: "Team NPS",
                description: "Internal team satisfaction scores ensure the people delivering your brand experience are engaged and motivated.",
              },
              {
                icon: TrendingUp,
                title: "Trend Analysis",
                description: "Month-over-month NPS trends identify emerging issues before they impact retention and guide continuous improvement.",
              },
            ].map((metric, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                whileHover={{ y: -4 }}
                className="bg-white border border-black/[0.10] rounded-xl p-7 shadow-[0_2px_8px_rgba(0,0,0,0.03),0_4px_16px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.07)] hover:border-[#C9A962]/25 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-lg bg-[#F9F9F7] border border-black/[0.06] flex items-center justify-center mb-5">
                  <metric.icon className="w-5 h-5 text-[#C9A962]" />
                </div>
                <h3 className="font-display text-lg font-bold text-black mb-2.5 tracking-tight">{metric.title}</h3>
                <p className="font-body text-sm text-black/50 leading-relaxed">{metric.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feedback Loop */}
      <section id="feedback" className="py-20 sm:py-24 bg-white">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Real-Time Feedback
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              The Feedback Loop
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/50 max-w-2xl mx-auto mt-4 leading-relaxed">
              Every customer interaction generates actionable data that feeds back into the system 
              for continuous optimization.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  icon: MessageSquare,
                  title: "Post-Service Surveys",
                  description: "Automated surveys sent after every service interaction — capturing satisfaction, feedback, and improvement suggestions in real time.",
                },
                {
                  icon: BarChart3,
                  title: "Dashboard Analytics",
                  description: "Real-time dashboards displaying NPS trends, satisfaction by service type, team performance, and geographic breakdowns.",
                },
                {
                  icon: Award,
                  title: "Recognition & Coaching",
                  description: "Top-performing team members are recognized. Detractor feedback triggers immediate coaching and service recovery protocols.",
                },
                {
                  icon: TrendingUp,
                  title: "Continuous Improvement",
                  description: "Monthly reviews of NPS data drive process improvements, training updates, and service enhancements across the organization.",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -3 }}
                  className="flex gap-5 p-6 rounded-xl bg-white border border-black/[0.10] shadow-[0_2px_8px_rgba(0,0,0,0.03),0_4px_12px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.07)] hover:border-[#C9A962]/25 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-[#F9F9F7] border border-black/[0.06] flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-[#C9A962]" />
                  </div>
                  <div>
                    <h3 className="font-display text-base font-bold text-black mb-2 tracking-tight">{item.title}</h3>
                    <p className="font-body text-sm text-black/50 leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-20 sm:py-24 bg-[#F9F9F7]">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center mb-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Our Methodology
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              How We Drive Results
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-5 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            {[
              { title: "Data-Driven Decisions", description: "Every strategic decision is backed by data — from channel selection to messaging to partnership prioritization. No guesswork." },
              { title: "Rapid Iteration", description: "Weekly sprint cycles with A/B testing across campaigns, messaging, and channels. What works gets scaled; what doesn't gets cut." },
              { title: "Transparent Reporting", description: "Monthly performance reports with clear KPIs, trend analysis, and actionable recommendations. Full visibility into every dollar spent." },
              { title: "Aligned Incentives", description: "Our success is tied to your success. Performance-based engagement models ensure we're always pushing for maximum results." },
            ].map((method, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="flex gap-4 items-start p-6 rounded-xl bg-white border border-black/[0.10] shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] hover:border-[#C9A962]/20 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#C9A962]/10 border border-[#C9A962]/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#C9A962]" />
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-black mb-2 tracking-tight">{method.title}</h3>
                  <p className="font-body text-sm text-black/50 leading-relaxed">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-20 sm:py-24 bg-white border-t border-black/[0.06]">
        <div className="container px-6 sm:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#C9A962] font-semibold text-[11px] tracking-[0.25em] uppercase">
              Ready to Grow?
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-3xl sm:text-4xl font-semibold text-black mt-4 tracking-tight">
              Let's Build Your Go-To-Market Strategy
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-sm text-black/50 mt-4 mb-8 leading-relaxed">
              Well Estate Group is ready to accelerate your market entry and growth. 
              Let's start with a conversation about your product, your market, and your ambitions.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/gtm" className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-lg bg-black text-white font-body text-sm font-semibold hover:bg-[#111] shadow-[0_2px_8px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all">
                Back to GTM Overview
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="mailto:shawn@wellestategroup.com" className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg border border-black/[0.15] text-black font-body text-sm font-semibold hover:border-[#C9A962]/40 hover:bg-[#F9F9F7] transition-all">
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
