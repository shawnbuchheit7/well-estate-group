/*
 * Sticky Section Navigation for Long Pages
 * Shows a floating sidebar with quick links to page sections
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp, List } from 'lucide-react';

interface Section {
  id: string;
  label: string;
}

interface SectionNavProps {
  sections: Section[];
}

export function SectionNav({ sections }: SectionNavProps) {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling 300px
      setIsVisible(window.scrollY > 300);

      // Find active section
      const sectionElements = sections.map(s => ({
        id: s.id,
        element: document.getElementById(s.id)
      })).filter(s => s.element);

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        const { id, element } = sectionElements[i];
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100; // Account for fixed header
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
          <div className="bg-card/95 backdrop-blur-lg border border-border rounded-2xl shadow-xl overflow-hidden">
            {/* Toggle button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full p-3 flex items-center justify-center hover:bg-muted/50 transition-colors border-b border-border"
            >
              <List className="w-4 h-4 text-muted-foreground" />
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
                    <ul className="space-y-1">
                      {sections.map((section) => (
                        <li key={section.id}>
                          <button
                            onClick={() => scrollToSection(section.id)}
                            className={`w-full text-left px-3 py-2 rounded-lg text-xs font-body transition-all ${
                              activeSection === section.id
                                ? 'bg-primary/10 text-primary font-medium'
                                : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <span className={`w-1.5 h-1.5 rounded-full transition-colors ${
                                activeSection === section.id ? 'bg-primary' : 'bg-muted-foreground/30'
                              }`} />
                              <span className="truncate max-w-[120px]">{section.label}</span>
                            </div>
                          </button>
                        </li>
                      ))}
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
