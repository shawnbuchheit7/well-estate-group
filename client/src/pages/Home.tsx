/*
 * Home Page - Well Estate Group
 * Minimalist design with large animated spinning logo
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Full Screen Hero with Animated Logo */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        {/* Dark Background */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Subtle radial glow behind logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 1.5 }}
            className="w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-primary/5 rounded-full blur-3xl" 
          />
        </div>
        
        {/* Content */}
        <div className="container relative z-10 flex flex-col items-center justify-center">
          {/* Large Spinning Logo */}
          <motion.div
            initial={{ rotate: 0, scale: 0.5, opacity: 0 }}
            animate={{ 
              rotate: [0, 360, 720, 1080, 1440, 1800], 
              scale: [0.5, 0.8, 0.9, 0.95, 1, 1],
              opacity: [0, 1, 1, 1, 1, 1]
            }}
            transition={{ 
              duration: 3,
              ease: [0.16, 1, 0.3, 1],
              times: [0, 0.2, 0.4, 0.6, 0.8, 1]
            }}
          >
            <img 
              src="/well-estate-group/images/logos/logo-icon-gold-outline.png" 
              alt="Well Estate Group" 
              className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]"
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
