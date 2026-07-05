import { motion, useScroll, useSpring } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowUp, ChevronUp } from "lucide-react";
import { useLocation } from "wouter";

// Scroll progress indicator at top of page
export function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [location] = useLocation();
  const isEstateRoute = location.startsWith("/longevity/estate");

  // Estate: subtle white/ivory bar on dark hero, neutral gray elsewhere
  // WEG: gold gradient
  const progressBackground = isEstateRoute
    ? "linear-gradient(90deg, rgba(255,255,255,0.6), rgba(255,255,255,0.9))"
    : "linear-gradient(90deg, #B8860B, #B8963E)";

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] origin-left z-[100]"
      style={{ scaleX, background: progressBackground }}
    />
  );
}

// Back to top floating button
export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [location] = useLocation();
  const isEstateRoute = location.startsWith("/longevity/estate");

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  // Estate: black button, WEG: gold button
  const btnBg = isEstateRoute ? "#1A1A1A" : "#B8860B";
  const btnShadow = isEstateRoute ? "0 4px 12px rgba(0,0,0,0.3)" : "0 4px 12px rgba(184,134,11,0.3)";

  return (
    <motion.button
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 w-10 h-10 rounded-full text-white flex items-center justify-center hover:scale-110 transition-transform"
      style={{ backgroundColor: btnBg, boxShadow: btnShadow }}
      aria-label="Back to top"
    >
      <ChevronUp className="w-5 h-5" />
    </motion.button>
  );
}
