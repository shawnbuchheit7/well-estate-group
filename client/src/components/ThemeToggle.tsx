/**
 * Theme Toggle Component
 * A premium dark mode toggle button with gold accent
 */

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export function ThemeToggle() {
  const { theme, toggleTheme, switchable } = useTheme();

  if (!switchable || !toggleTheme) return null;

  const isDark = theme === "dark";

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 p-2 rounded-full border border-[#B8860B]/40 hover:border-[#B8860B]/60 transition-all bg-transparent"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        exit={{ rotate: 90, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        {isDark ? (
          <Sun className="w-4 h-4 text-[#B8860B]" />
        ) : (
          <Moon className="w-4 h-4 text-black/60" />
        )}
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;
