/*
 * Home Page - Well Estate Group
 * Minimalist design with large dynamic spinning logo animation
 * Light theme with brand colors
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Full Screen Hero with Animated Logo */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        {/* Light Background */}
        <div className="absolute inset-0 bg-background" />
        
        {/* Animated golden glow rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Outer ring - pulses outward */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ 
              opacity: [0, 0.3, 0.1, 0],
              scale: [0.3, 1.5, 2, 2.5]
            }}
            transition={{ 
              duration: 3,
              delay: 2,
              ease: "easeOut"
            }}
            className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border-2 border-primary/30" 
          />
          
          {/* Middle ring - pulses outward */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ 
              opacity: [0, 0.4, 0.2, 0],
              scale: [0.3, 1.2, 1.6, 2]
            }}
            transition={{ 
              duration: 2.5,
              delay: 2.2,
              ease: "easeOut"
            }}
            className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-primary/20" 
          />
          
          {/* Inner glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1.5, delay: 2.5 }}
            className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] bg-gradient-radial from-primary/20 via-primary/5 to-transparent rounded-full blur-2xl" 
          />
        </div>
        
        {/* Content */}
        <div className="container relative z-10 flex flex-col items-center justify-center">
          {/* Large Dynamic Spinning Logo */}
          <motion.div
            initial={{ 
              rotate: 0, 
              scale: 0.2, 
              opacity: 0,
              filter: "blur(10px)"
            }}
            animate={{ 
              rotate: [0, 180, 540, 900, 1260, 1620, 1800], 
              scale: [0.2, 0.4, 0.6, 0.8, 0.9, 0.95, 1],
              opacity: [0, 0.5, 0.8, 1, 1, 1, 1],
              filter: ["blur(10px)", "blur(5px)", "blur(2px)", "blur(0px)", "blur(0px)", "blur(0px)", "blur(0px)"]
            }}
            transition={{ 
              duration: 2.5,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.15, 0.3, 0.5, 0.7, 0.85, 1]
            }}
            className="relative"
          >
            {/* Shadow/glow effect behind logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.3 }}
              className="absolute inset-0 blur-xl"
            >
              <img 
                src="/well-estate-group/images/logos/logo-icon-gold-outline.png" 
                alt="" 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] opacity-30"
              />
            </motion.div>
            
            {/* Main logo */}
            <img 
              src="/well-estate-group/images/logos/logo-icon-gold-outline.png" 
              alt="Well Estate Group" 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] drop-shadow-lg"
            />
          </motion.div>
          
          {/* Subtle bounce effect after spin completes */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ 
              duration: 0.6,
              delay: 2.6,
              ease: "easeInOut"
            }}
            className="absolute"
          >
            {/* This creates a subtle "landing" bounce effect */}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
