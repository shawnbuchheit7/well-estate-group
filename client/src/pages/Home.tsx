/*
 * DESIGN: "Cellular Renaissance" - Organic Futurism
 * Home page with hero section
 */

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Link } from "wouter";
import Layout from "@/components/Layout";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Home() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/hero-cellular.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
        </div>
        
        <div className="container relative z-10 py-20">
          <motion.div 
            className="max-w-4xl mx-auto text-center"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-mono text-sm tracking-wider">
                SERIES A INVESTMENT
              </span>
            </motion.div>
            
            <motion.h1 
              variants={fadeInUp}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.95] mb-8"
            >
              Live Longer.
              <br />
              <span className="text-gradient">Live Happier.</span>
            </motion.h1>
            
            <motion.p 
              variants={fadeInUp}
              className="font-body text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
            >
              The world's first physician-led, vertically integrated regenerative medicine platform. 
              Redefining longevity at the intersection of science and luxury.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/opportunity">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold text-lg px-8 py-6 glow-gold"
                >
                  $50M Series A <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-primary/50 text-foreground hover:bg-primary/10 font-body text-lg px-8 py-6"
                onClick={() => setVideoModalOpen(true)}
              >
                <Play className="mr-2 w-5 h-5" /> Watch Overview
              </Button>
            </motion.div>
            
            <motion.div 
              variants={fadeInUp}
              className="mt-16 flex justify-center"
            >
              <Link 
                href="/opportunity" 
                className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <span className="font-mono text-xs tracking-wider">EXPLORE THE OPPORTUNITY</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Video Modal */}
      {videoModalOpen && (
        <div 
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4"
          onClick={() => setVideoModalOpen(false)}
        >
          <div className="relative w-full max-w-5xl aspect-video">
            <iframe
              src="https://player.vimeo.com/video/1091094529?autoplay=1"
              className="w-full h-full rounded-lg"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
            <button 
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              onClick={() => setVideoModalOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </Layout>
  );
}
