/*
 * Sticky Section Navigation for Long Pages
 * Super premium floating sidebar — refined dark glass with crisp gold accents
 * Enhanced: Sharper borders, tighter radius, better contrast
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List } from 'lucide-react';
import { usePresentationMode } from '@/components/PresentationMode';

const GOLD = "#C9A962";

interface Section {
  id: string;
  label: string;
}

interface SectionNavProps {
  sections: Section[];
}

export function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState<string>(sections[0]?.id || '');
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);
  const { isPresentMode } = usePresentationMode();

  const handleScroll = useCallback(() => {
    setIsVisible(window.scrollY > 200);

    let bestMatch = sections[0]?.id || '';
    let bestDistance = Infinity;

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      const distance = Math.abs(rect.top - 120);
      if (rect.top <= 200 && distance < bestDistance) {
        bestDistance = distance;
        bestMatch = s.id;
      }
    }

    if (window.scrollY < 300 && sections.length > 0) {
      bestMatch = sections[0].id;
    }

    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 200 && sections.length > 0) {
      bestMatch = sections[sections.length - 1].id;
    }

    setActiveSection(bestMatch);
  }, [sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const top = element.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  // Hide section nav in presentation mode
  if (isPresentMode) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden xl:block"
        >
          <div
            className="backdrop-blur-2xl border rounded-xl overflow-hidden"
            style={{
              background: "rgba(10,10,10,0.92)",
              borderColor: "rgba(201,169,98,0.15)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.35), 0 2px 8px rgba(0,0,0,0.2), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* Toggle button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full p-3 flex items-center justify-center transition-all duration-200 border-b"
              style={{ borderColor: "rgba(255,255,255,0.06)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(201,169,98,0.08)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
            >
              <List className="w-4 h-4" style={{ color: GOLD, opacity: 0.7 }} />
            </button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <nav className="p-2.5 max-h-[60vh] overflow-y-auto">
                    <ul className="space-y-0.5">
                      {sections.map((section) => {
                        const isActive = activeSection === section.id;
                        return (
                          <li key={section.id}>
                            <button
                              onClick={() => scrollToSection(section.id)}
                              className="w-full text-left px-3 py-2 rounded-lg text-xs font-mono transition-all duration-200"
                              style={{
                                background: isActive ? `rgba(201,169,98,0.12)` : "transparent",
                                color: isActive ? GOLD : "rgba(255,255,255,0.40)",
                                fontWeight: isActive ? 600 : 400,
                                borderLeft: isActive ? `2px solid ${GOLD}` : "2px solid transparent",
                              }}
                              onMouseEnter={e => {
                                if (!isActive) {
                                  e.currentTarget.style.background = "rgba(255,255,255,0.04)";
                                  e.currentTarget.style.color = "rgba(255,255,255,0.7)";
                                }
                              }}
                              onMouseLeave={e => {
                                if (!isActive) {
                                  e.currentTarget.style.background = "transparent";
                                  e.currentTarget.style.color = "rgba(255,255,255,0.40)";
                                }
                              }}
                            >
                              <div className="flex items-center gap-2.5">
                                <span
                                  className="w-1.5 h-1.5 rounded-full transition-all duration-200 flex-shrink-0"
                                  style={{
                                    background: isActive ? GOLD : "rgba(255,255,255,0.12)",
                                    transform: isActive ? "scale(1.3)" : "scale(1)",
                                    boxShadow: isActive ? `0 0 6px ${GOLD}40` : "none",
                                  }}
                                />
                                <span className="truncate max-w-[130px] tracking-[0.08em] text-[10px] uppercase">
                                  {section.label}
                                </span>
                              </div>
                            </button>
                          </li>
                        );
                      })}
                    </ul>
                  </nav>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default SectionNav;
