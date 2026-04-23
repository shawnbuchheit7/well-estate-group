/*
 * GTM Results & NPS Page - WEG Customer Satisfaction
 * Based on WEG Master Deck Slides 120-128
 * Matches WEG "Cellular Renaissance" design system
 */

import { motion } from "framer-motion";
import { Star, TrendingUp, Users, BarChart3, MessageSquare, ThumbsUp, ArrowRight, CheckCircle2, Award } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer, scaleIn } from "@/lib/animations";
import { AnimatedCounter } from "@/components/AnimatedCounter";
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
      <section id="hero" className="py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-background to-background" />
        <div className="container relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              PROVEN RESULTS
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-5xl md:text-7xl font-medium mt-4 mb-6">
              Results & Customer Satisfaction
            </motion.h1>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent mb-6"
            />
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground leading-relaxed">
              Real-time customer feedback, Net Promoter Score tracking, and continuous improvement 
              drive exceptional satisfaction and retention across every engagement.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* NPS Section */}
      <section id="nps" className="py-20 bg-card/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              NET PROMOTER SCORE
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Measuring What Matters
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              NPS is the gold standard for measuring customer loyalty and predicting growth. 
              We implement real-time NPS tracking across every touchpoint.
            </motion.p>
          </motion.div>

          {/* NPS Scale Explanation */}
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="bg-card border border-border rounded-2xl p-8">
              <h3 className="font-display text-xl font-medium mb-6 text-center">Understanding NPS</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 rounded-xl bg-red-500/5 border border-red-500/10">
                  <p className="font-display text-2xl font-bold text-red-400 mb-1">0–6</p>
                  <p className="font-display text-sm font-medium mb-2">Detractors</p>
                  <p className="font-body text-xs text-muted-foreground">Unhappy customers who can damage your brand through negative word-of-mouth</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-yellow-500/5 border border-yellow-500/10">
                  <p className="font-display text-2xl font-bold text-yellow-400 mb-1">7–8</p>
                  <p className="font-display text-sm font-medium mb-2">Passives</p>
                  <p className="font-body text-xs text-muted-foreground">Satisfied but unenthusiastic customers vulnerable to competitive offerings</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-green-500/5 border border-green-500/10">
                  <p className="font-display text-2xl font-bold text-green-400 mb-1">9–10</p>
                  <p className="font-display text-sm font-medium mb-2">Promoters</p>
                  <p className="font-body text-xs text-muted-foreground">Loyal enthusiasts who will fuel growth through referrals and repeat purchases</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="font-body text-sm text-muted-foreground">
                  <span className="font-medium">NPS = % Promoters − % Detractors</span> &nbsp;|&nbsp; 
                  Industry average: 30–40 &nbsp;|&nbsp; World-class: 70+
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Key NPS Metrics */}
          <motion.div
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
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
                whileHover={{ y: -8 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative bg-card border border-border rounded-2xl p-8 h-full hover:border-primary/50 hover:shadow-lg transition-all duration-300">
                  <metric.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="font-display text-xl font-medium mb-3">{metric.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{metric.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feedback Loop */}
      <section id="feedback" className="py-20">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              REAL-TIME FEEDBACK
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              The Feedback Loop
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground max-w-3xl mx-auto">
              Every customer interaction generates actionable data that feeds back into the system 
              for continuous optimization.
            </motion.p>
          </motion.div>

          <motion.div
            className="max-w-5xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <div className="grid md:grid-cols-2 gap-8">
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
                  className="flex gap-5 p-6 rounded-2xl bg-card border border-border hover:border-primary/40 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-medium mb-2">{item.title}</h3>
                    <p className="font-body text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-20 bg-card/30">
        <div className="container">
          <motion.div
            className="text-center mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              OUR METHODOLOGY
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              How We Drive Results
            </motion.h2>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
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
                className="flex gap-4 items-start"
              >
                <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium mb-2">{method.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="py-24">
        <div className="container">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-primary font-semibold text-sm tracking-wider uppercase">
              READY TO GROW?
            </motion.span>
            <motion.h2 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-6">
              Let's Build Your Go-To-Market Strategy
            </motion.h2>
            <motion.p variants={fadeInUp} className="font-body text-xl text-muted-foreground mb-10">
              Well Estate Group is ready to accelerate your market entry and growth. 
              Let's start with a conversation about your product, your market, and your ambitions.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/gtm" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-primary text-white font-body font-medium hover:bg-primary/90 transition-colors shadow-lg hover:shadow-primary/30">
                Back to GTM Overview
                <ArrowRight className="w-5 h-5" />
              </a>
              <a href="mailto:shawn@wellestategroup.com" className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-primary text-primary font-body font-medium hover:bg-primary/5 transition-colors">
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
