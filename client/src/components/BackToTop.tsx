/**
 * BackToTop - Floating button that appears when scrolled down
 * Smooth scrolls back to the top of the page
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 w-8 h-8 rounded-full bg-white/80 backdrop-blur-sm border border-black/8 shadow-sm flex items-center justify-center text-black/40 hover:text-black/70 hover:border-black/20 hover:shadow-md transition-all duration-200"
          aria-label="Back to top"
        >
          <ChevronUp className="w-3.5 h-3.5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
