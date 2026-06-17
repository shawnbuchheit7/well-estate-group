/*
 * Digital Health Twin — Embedded Live Application
 * Displays the actual Digital Health Twin app via iframe
 * Source: hallmarks-of-aging-digital-twin-shawn-free.vercel.app
 */

import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Maximize2, Minimize2 } from "lucide-react";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const TWIN_URL = "https://hallmarks-of-aging-digital-twin-shawn-free.vercel.app";

export default function DigitalHealthTwin() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <Layout>
      {/* Brief Header */}
      <section className="pt-16 pb-8 bg-white">
        <div className="container px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span variants={fadeInUp} className="font-mono text-[#B8860B] font-semibold text-xs tracking-[0.2em] uppercase">
              Technology & AI
            </motion.span>
            <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-5xl font-medium mt-4 mb-4 text-black">
              Digital Health Twin
            </motion.h1>
            <motion.p variants={fadeInUp} className="font-body text-base text-black/60 max-w-2xl mx-auto mb-6">
              Full-body organ-level health visualization mapping 122 biomarkers, 8 imaging modalities, and 6 functional assessments into a unified digital twin.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex items-center justify-center gap-4">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#B8860B]/40 text-sm font-medium text-black/70 hover:border-[#B8860B] hover:text-[#B8860B] transition-colors"
              >
                {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                {isFullscreen ? "Exit Fullscreen" : "Fullscreen"}
              </button>
              <a
                href={TWIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-[#B8860B]/40 text-sm font-medium text-black/70 hover:border-[#B8860B] hover:text-[#B8860B] transition-colors"
              >
                <ExternalLink className="w-4 h-4" />
                Open in New Tab
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Embedded Application */}
      <section className={`bg-white ${isFullscreen ? 'fixed inset-0 z-[9999] pt-0' : 'pb-20'}`}>
        {isFullscreen && (
          <div className="absolute top-4 right-4 z-[10000]">
            <button
              onClick={() => setIsFullscreen(false)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/90 backdrop-blur border border-[#B8860B]/40 text-sm font-medium text-black/70 hover:border-[#B8860B] hover:text-[#B8860B] transition-colors shadow-lg"
            >
              <Minimize2 className="w-4 h-4" />
              Exit Fullscreen
            </button>
          </div>
        )}
        <div className={`${isFullscreen ? 'h-full w-full' : 'container px-6'}`}>
          <div className={`${isFullscreen ? 'h-full' : 'max-w-7xl mx-auto rounded-2xl overflow-hidden border border-[#B8860B]/20 shadow-[0_4px_24px_rgba(0,0,0,0.06)]'}`}>
            <iframe
              src={TWIN_URL}
              className={`w-full ${isFullscreen ? 'h-full' : 'h-[800px] md:h-[900px]'}`}
              title="Digital Health Twin"
              allow="fullscreen"
              style={{ border: 'none' }}
            />
          </div>
        </div>
      </section>
    </Layout>
  );
}
