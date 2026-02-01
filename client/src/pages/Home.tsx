/*
 * Home Page - Well Estate Group
 * Ultra-dynamic coin-flip style logo animation
 * Enhanced with particle effects and floating shapes
 */

import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { ParticleField, FloatingShapes, GlowOrb } from "@/components/AnimatedBackgrounds";

export default function Home() {
  return (
    <Layout>
      {/* Full Screen Hero with Animated Logo */}
      <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
        {/* Background with subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted/30" />
        
        {/* Floating geometric shapes */}
        <FloatingShapes count={8} />
        
        {/* Particle field effect */}
        <ParticleField count={40} color="#C9A962" />
        
        {/* Glowing orbs */}
        <GlowOrb className="top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2" size={500} blur={120} />
        <GlowOrb className="bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2" size={400} blur={100} color="#E8D5A3" />
        
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
          
          {/* Pulsing outer ring */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.2, 0.1],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 3,
              delay: 3.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute w-[500px] h-[500px] md:w-[700px] md:h-[700px] rounded-full border border-primary/10" 
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
                src="/images/logos/logo-icon-gold-outline.png" 
                alt="" 
                className="w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] opacity-50"
              />
            </motion.div>
            
            {/* Main logo with enhanced hover */}
            <motion.img 
              src="/images/logos/logo-icon-gold-outline.png" 
              alt="Well Estate Group" 
              className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] xl:w-[500px] xl:h-[500px] cursor-pointer"
              style={{ 
                filter: "drop-shadow(0 10px 30px rgba(184, 150, 62, 0.5))"
              }}
              whileHover={{ 
                scale: 1.08,
                rotateY: 20,
                filter: "drop-shadow(0 20px 50px rgba(184, 150, 62, 0.7))",
                transition: { duration: 0.4, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.95 }}
            />
          </motion.div>
          
          {/* Tagline that appears after animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-12 text-center"
          >
            <motion.p 
              className="font-display text-xl md:text-2xl text-muted-foreground tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3.8 }}
            >
              Premium Longevity Consulting
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 4.2, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="mt-4 h-px w-32 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent"
            />
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ opacity: [1, 0.3, 1], y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </section>
    </Layout>
  );
}
