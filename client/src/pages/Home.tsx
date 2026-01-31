/*
 * Home Page - Well Estate Group
 * Ultra-dynamic coin-flip style logo animation
 * 3D Y-axis rotation like a spinning coin
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
        
        {/* Animated background elements */}
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Dramatic expanding rings */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ 
              opacity: [0, 0.6, 0.3, 0],
              scale: [0.2, 1.2, 1.8, 2.5]
            }}
            transition={{ 
              duration: 2,
              delay: 2.5,
              ease: "easeOut"
            }}
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-4 border-primary" 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ 
              opacity: [0, 0.5, 0.2, 0],
              scale: [0.2, 1, 1.5, 2]
            }}
            transition={{ 
              duration: 1.8,
              delay: 2.7,
              ease: "easeOut"
            }}
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border-2 border-primary/60" 
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.2 }}
            animate={{ 
              opacity: [0, 0.4, 0.1, 0],
              scale: [0.2, 0.8, 1.2, 1.6]
            }}
            transition={{ 
              duration: 1.5,
              delay: 2.9,
              ease: "easeOut"
            }}
            className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-primary/40" 
          />
          
          {/* Intense golden glow */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.3 }}
            animate={{ opacity: 0.25, scale: 1 }}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="absolute w-[600px] h-[600px] md:w-[800px] md:h-[800px] bg-gradient-radial from-primary/40 via-primary/10 to-transparent rounded-full blur-3xl" 
          />
        </div>
        
        {/* Content */}
        <div className="container relative z-10 flex flex-col items-center justify-center" style={{ perspective: "1000px" }}>
          
          {/* 3D Coin-Flip Logo Animation */}
          <motion.div
            initial={{ 
              rotateY: 0,
              scale: 0.1,
              opacity: 0,
              z: -500
            }}
            animate={{ 
              rotateY: [0, 360, 720, 1080, 1440, 1800, 2160, 2520, 2880],
              scale: [0.1, 0.3, 0.5, 0.7, 0.85, 0.95, 1, 1, 1],
              opacity: [0, 1, 1, 1, 1, 1, 1, 1, 1],
              z: [-500, -300, -150, -50, 0, 0, 0, 0, 0]
            }}
            transition={{ 
              duration: 3,
              ease: [0.25, 0.1, 0.25, 1],
              times: [0, 0.12, 0.25, 0.4, 0.55, 0.7, 0.85, 0.95, 1]
            }}
            style={{ 
              transformStyle: "preserve-3d",
            }}
            className="relative"
          >
            {/* Dynamic shadow that moves with the flip */}
            <motion.div
              initial={{ opacity: 0, scaleX: 1 }}
              animate={{ 
                opacity: [0, 0.3, 0.5, 0.3, 0.5, 0.3, 0.5, 0.4, 0.4],
                scaleX: [1, 0.1, 1, 0.1, 1, 0.1, 1, 1, 1]
              }}
              transition={{ 
                duration: 3,
                ease: [0.25, 0.1, 0.25, 1],
                times: [0, 0.12, 0.25, 0.4, 0.55, 0.7, 0.85, 0.95, 1]
              }}
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
                filter: "drop-shadow(0 10px 30px rgba(201, 169, 98, 0.4))"
              }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 15,
                transition: { duration: 0.3 }
              }}
            />
          </motion.div>
          
          {/* Particle burst effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {[...Array(12)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ 
                  opacity: 0, 
                  scale: 0,
                  x: 0,
                  y: 0
                }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0.5],
                  x: Math.cos((i * 30) * Math.PI / 180) * 250,
                  y: Math.sin((i * 30) * Math.PI / 180) * 250
                }}
                transition={{ 
                  duration: 1.2,
                  delay: 2.6 + (i * 0.03),
                  ease: "easeOut"
                }}
                className="absolute w-3 h-3 bg-primary rounded-full"
              />
            ))}
          </div>
          
          {/* Final subtle bounce */}
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, -20, 0, -8, 0] }}
            transition={{ 
              duration: 0.8,
              delay: 3,
              ease: "easeOut"
            }}
            className="absolute inset-0 pointer-events-none"
          />
        </div>
      </section>
    </Layout>
  );
}
