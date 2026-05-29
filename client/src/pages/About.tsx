/*
 * About Page - Well Estate Group
 * Company overview with social proof and advisory credibility
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />
        
        {/* Content */}
        <div className="container relative z-10 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-body text-sm mb-6">
              About Us
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-primary">Well Estate</span> Group
            </h1>
            <p className="font-body text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Premium consulting for physician-led, vertically integrated regenerative medicine platforms. 
              Redefining longevity at the intersection of science and luxury.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-[#B8860B]/40 rounded-2xl p-8 md:p-12">
              <p className="font-mono text-[10px] text-[#B8860B] tracking-[0.2em] uppercase mb-4 text-center section-header-accent">
                Our Mission
              </p>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-6 text-center">
                Building the Future of Proactive Healthcare
              </h2>
              <p className="font-body text-[#0A0A0A]/70 text-center text-lg leading-relaxed mb-6">
                Well Estate Group brings together senior executives from the world&apos;s leading fitness, 
                wellness, and hospitality brands — delivering institutional-grade consulting to companies 
                ready to scale in the $5.6 trillion global wellness economy.
              </p>

            </div>
          </motion.div>
        </div>
      </section>

    </Layout>
  );
}
