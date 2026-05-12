/**
 * FloatingCTA - A subtle floating call-to-action that appears on investor-facing pages
 * Provides a persistent "Schedule a Call" / "Request Data Room" action
 */
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, FileText, X, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export function FloatingCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  if (isDismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="absolute bottom-16 right-0 w-72 bg-white rounded-xl border border-[#B8860B]/40 shadow-xl p-5 mb-3"
          >
            <button
              onClick={() => setIsDismissed(true)}
              className="absolute top-3 right-3 text-black/40 hover:text-black/70 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
            <p className="font-mono text-[10px] text-[#B8860B] tracking-[0.15em] uppercase mb-2">
              Interested?
            </p>
            <h4 className="font-display text-lg font-semibold text-[#0A0A0A] mb-3">
              Let's Connect
            </h4>
            <p className="font-body text-xs text-[#0A0A0A]/70 mb-4 leading-relaxed">
              Schedule a confidential conversation about investment opportunities or request access to our data room.
            </p>
            <div className="space-y-2">
              <Link href="/longevity/contact">
                <div className="flex items-center gap-3 p-3 rounded-lg border border-[#B8860B]/30 hover:border-[#B8860B]/60 hover:bg-[#B8860B]/[0.03] transition-all cursor-pointer group">
                  <Calendar className="w-4 h-4 text-[#B8860B]" />
                  <span className="font-body text-sm text-[#0A0A0A]/80 flex-1">Schedule a Call</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B8860B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
              <Link href="/longevity/data-room">
                <div className="flex items-center gap-3 p-3 rounded-lg border border-[#B8860B]/30 hover:border-[#B8860B]/60 hover:bg-[#B8860B]/[0.03] transition-all cursor-pointer group">
                  <FileText className="w-4 h-4 text-[#B8860B]" />
                  <span className="font-body text-sm text-[#0A0A0A]/80 flex-1">Request Data Room</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#B8860B] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-[#B8860B] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all flex items-center justify-center"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        style={{ boxShadow: "0 4px 20px rgba(184,134,11,0.3)" }}
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
