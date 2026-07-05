/**
 * Theme Toggle Component
 * Route-aware: uses black/white on Estate routes, gold on WEG routes
 */

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
import { useLocation } from "wouter";

export function ThemeToggle() {
  const { theme, toggleTheme, switchable } = useTheme();
  const [location] = useLocation();
  const isEstateRoute = location.startsWith("/longevity/estate");

  if (!switchable || !toggleTheme) return null;

  const isDark = theme === "dark";

  // Estate: black/white neutral styling. WEG: gold accent.
  const borderColor = isEstateRoute
    ? "rgba(0,0,0,0.25)"
    : "rgba(184,134,11,0.4)";
  const borderHover = isEstateRoute
    ? "rgba(0,0,0,0.5)"
    : "rgba(184,134,11,0.6)";
  const iconColor = isEstateRoute
    ? (isDark ? "#FFFFFF" : "#1A1A1A")
    : (isDark ? "#B8860B" : undefined);

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative flex items-center gap-2 p-2 rounded-full transition-all bg-transparent"
      style={{ border: `1px solid ${borderColor}` }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = borderHover; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = borderColor; }}
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
          <Sun className="w-4 h-4" style={{ color: iconColor }} />
        ) : (
          <Moon className="w-4 h-4 text-black/60" style={iconColor ? { color: iconColor } : undefined} />
        )}
      </motion.div>
    </motion.button>
  );
}

export default ThemeToggle;
