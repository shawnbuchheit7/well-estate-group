/**
 * FloatingCTA - A subtle floating call-to-action that appears on investor-facing pages
 * Provides a persistent "Schedule a Call" / "Request Data Room" action
 * Route-aware: uses black/white on Estate routes, gold on WEG routes
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, FileText, X, ArrowRight } from "lucide-react";
import { Link, useLocation } from "wouter";

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [location] = useLocation();
  const isEstateRoute = location.startsWith("/longevity/estate");

  if (isDismissed) return null;

  // Route-aware colors
  const accent = isEstateRoute ? "#1A1A1A" : "#B8860B";
  const accentBorder = isEstateRoute ? "rgba(26,26,26,0.3)" : "rgba(184,134,11,0.4)";
  const accentBorderHover = isEstateRoute ? "rgba(26,26,26,0.6)" : "rgba(184,134,11,0.6)";
  const accentBg = isEstateRoute ? "rgba(26,26,26,0.03)" : "rgba(184,134,11,0.03)";

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-72 bg-white rounded-xl shadow-xl p-5 mb-3"
            style={{ border: `1px solid ${accentBorder}` }}
          >
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute top-3 right-3 text-black/40 hover:text-black/70 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="font-mono text-[10px] tracking-[0.15em] uppercase mb-2" style={{ color: accent }}>
              Interested?
            </p>
            <h4 className="font-display text-lg font-semibold text-[#0A0A0A] mb-3">
              Let's Connect
            </h4>
            <p className="font-body text-xs text-[#0A0A0A]/70 mb-4 leading-relaxed">
              Schedule a confidential conversation about investment opportunities or request access to our data room.
            </p>
            <div className="space-y-2">
              <Link href={isEstateRoute ? "/longevity/estate" : "/longevity/contact"}>
                <div
                  className="flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer group"
                  style={{ borderColor: accentBorder }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = accentBorderHover; (e.currentTarget as HTMLElement).style.backgroundColor = accentBg; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = accentBorder; (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                >
                  <Calendar className="w-4 h-4" style={{ color: accent }} />
                  <span className="font-body text-sm text-[#0A0A0A]/80 flex-1">Schedule a Call</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: accent }} />
                </div>
              </Link>
              <Link href={isEstateRoute ? "/longevity/estate" : "/longevity/data-room"}>
                <div
                  className="flex items-center gap-3 p-3 rounded-lg border transition-all cursor-pointer group"
                  style={{ borderColor: accentBorder }}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = accentBorderHover; (e.currentTarget as HTMLElement).style.backgroundColor = accentBg; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = accentBorder; (e.currentTarget as HTMLElement).style.backgroundColor = 'transparent'; }}
                >
                  <FileText className="w-4 h-4" style={{ color: accent }} />
                  <span className="font-body text-sm text-[#0A0A0A]/80 flex-1">Request Data Room</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" style={{ color: accent }} />
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
        style={{ backgroundColor: accent, boxShadow: `0 4px 20px ${accent}4D` }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-5 h-5" />
        ) : (
          <Calendar className="w-5 h-5" />
        )}
      </motion.button>
    </div>
  );
}
