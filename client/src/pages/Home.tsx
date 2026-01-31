/*
 * Home Page - Well Estate Group
 * Ultra-dynamic coin-flip style logo animation
 * Smooth continuous 3D Y-axis rotation
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <Layout>
      {/* Full Screen Hero with Animated Logo */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
        
        {/* Animated background rings - Subtle and elegant */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Ring 1 - Outermost */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ 
              opacity: [0, 0.4, 0.25, 0.1, 0],
              scale: [0.3, 1, 1.5, 2, 2.5]
            }}
            transition={{ 
              duration: 2.5,
              delay: 2.8,
              ease: "easeOut"
            }}
            className="absolute w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full border-2 border-primary/60" 
          />
          
          {/* Ring 2 - Medium */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ 
              opacity: [0, 0.35, 0.2, 0.08, 0],
              scale: [0.3, 0.9, 1.3, 1.8, 2.2]
            }}
            transition={{ 
              duration: 2.2,
              delay: 2.9,
              ease: "easeOut"
            }}
            className="absolute w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full border border-primary/50" 
          />
          
          {/* Ring 3 - Inner */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ 
              opacity: [0, 0.3, 0.15, 0.05, 0],
              scale: [0.3, 0.8, 1.1, 1.5, 1.9]
            }}
            transition={{ 
              duration: 1.9,
              delay: 3,
              ease: "easeOut"
            }}
            className="absolute w-[350px] h-[350px] md:w-[550px] md:h-[550px] rounded-full border border-primary/40" 
          />
          
          {/* Static glow ring that stays - very subtle */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.15, scale: 1 }}
            transition={{ duration: 1, delay: 3.2 }}
            className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-primary/20" 
          />
          
          {/* Subtle golden glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 0.2, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-radial from-primary/30 via-primary/10 to-transparent rounded-full blur-3xl" 
          />
        </div>
        
        {/* Content */}
        <div className="container relative z-10 flex flex-col items-center justify-center" style={{ perspective: "1200px" }}>
          
          {/* 3D Coin-Flip Logo Animation - SMOOTH CONTINUOUS SPIN */}
          <motion.div
            initial={{ 
              rotateY: 0,
              scale: 0.1,
              opacity: 0,
              z: -600
            }}
            animate={{ 
              rotateY: 2880, /* 8 full rotations */
              scale: 1,
              opacity: 1,
              z: 0
            }}
            transition={{ 
              duration: 3,
              ease: [0.16, 1, 0.3, 1], /* Smooth deceleration curve */
              rotateY: {
                duration: 3,
                ease: [0.16, 1, 0.3, 1] /* Same smooth curve for rotation */
              },
              scale: {
                duration: 2.5,
                ease: "easeOut"
              },
              opacity: {
                duration: 0.5,
                ease: "easeOut"
              },
              z: {
                duration: 2.5,
                ease: "easeOut"
              }
            }}
            style={{ 
              transformStyle: "preserve-3d",
            }}
            className="relative"
          >
            {/* Dynamic shadow that moves with the flip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ duration: 1, delay: 2.5 }}
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 md:w-64 lg:w-80 h-8 bg-foreground/20 rounded-full blur-xl"
            />
            
            {/* Glow effect behind logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 2.8 }}
              className="absolute inset-0 blur-2xl"
            >
              <img 
                src="/well-estate-group/images/logos/logo-icon-gold-outline.png" 
                alt="" 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] opacity-50"
              />
            </motion.div>
            
            {/* Main logo */}
            <motion.img 
              src="/well-estate-group/images/logos/logo-icon-gold-outline.png" 
              alt="Well Estate Group" 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px]"
              style={{ 
                filter: "drop-shadow(0 10px 30px rgba(184, 150, 62, 0.5))"
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 15,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
