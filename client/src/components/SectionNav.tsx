/*
 * Sticky Section Navigation for Long Pages
 * Shows a floating sidebar with quick links to page sections
 * Luxury design with strong active state highlighting
 */

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { List } from 'lucide-react';

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

  const handleScroll = useCallback(() => {
    // Show nav after scrolling 200px
    setIsVisible(window.scrollY > 200);

    // Find active section based on which section is most visible in viewport
    let bestMatch = sections[0]?.id || '';
    let bestDistance = Infinity;

    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (!el) continue;
      const rect = el.getBoundingClientRect();
      // Check if the section top is above the middle of the viewport
      const distance = Math.abs(rect.top - 120);
      if (rect.top <= 200 && distance < bestDistance) {
        bestDistance = distance;
        bestMatch = s.id;
      }
    }

    // If we're at the very top, select the first section
    if (window.scrollY < 300 && sections.length > 0) {
      bestMatch = sections[0].id;
    }

    // If we're near the bottom, select the last section
    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 200 && sections.length > 0) {
      bestMatch = sections[sections.length - 1].id;
    }

    setActiveSection(bestMatch);
  }, [sections]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

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
          <div className="bg-white/95 backdrop-blur-xl border border-black/10 rounded-2xl shadow-[0_8px_40px_rgba(0,0,0,0.12)] overflow-hidden">
            {/* Toggle button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full p-3 flex items-center justify-center hover:bg-gray-50 transition-colors border-b border-black/5"
            >
              <List className="w-4 h-4 text-gray-500" />
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
                  <nav className="p-2 max-h-[60vh] overflow-y-auto">
                    <ul className="space-y-0.5">
                      {sections.map((section) => {
                        const isActive = activeSection === section.id;
                        return (
                          <li key={section.id}>
                            <button
                              onClick={() => scrollToSection(section.id)}
                              className={`w-full text-left px-3 py-2 rounded-lg text-xs font-body transition-all duration-200 ${
                                isActive
                                  ? 'bg-black text-white font-semibold shadow-sm'
                                  : 'text-gray-500 hover:text-black hover:bg-gray-50'
                              }`}
                            >
                              <div className="flex items-center gap-2.5">
                                <span className={`w-1.5 h-1.5 rounded-full transition-all duration-200 flex-shrink-0 ${
                                  isActive ? 'bg-[#C9A962] scale-125' : 'bg-gray-300'
                                }`} />
                                <span className="truncate max-w-[130px]">{section.label}</span>
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
