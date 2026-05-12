/**
 * Presentation Mode Component
 * Toggles a distraction-free presentation view:
 * - Hides top nav bar, footer, cross-pillar nav, scroll progress, and back-to-top
 * - Maximizes content area (full viewport)
 * - Shows a minimal floating toolbar at bottom with ESC hint
 * - ESC key or button exits back to normal mode
 * - Smooth animated transitions
 */

import { useState, useEffect, useCallback, createContext, useContext, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Monitor, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";

/* ========================================
 * PRESENTATION MODE CONTEXT
 * ======================================== */

interface PresentationContextType {
  isPresentMode: boolean;
  enterPresentMode: () => void;
  exitPresentMode: () => void;
  togglePresentMode: () => void;
}

const PresentationContext = createContext<PresentationContextType>({
  isPresentMode: false,
  enterPresentMode: () => {},
  exitPresentMode: () => {},
  togglePresentMode: () => {},
});

export function usePresentationMode() {
  return useContext(PresentationContext);
}

export function PresentationProvider({ children }: { children: ReactNode }) {
  const [isPresentMode, setIsPresentMode] = useState(false);

  const enterPresentMode = useCallback(() => {
    setIsPresentMode(true);
    // Request fullscreen for maximum immersion
    try {
      if (document.documentElement.requestFullscreen && !document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(() => {
          // Fullscreen denied — still enter present mode without it
        });
      }
    } catch {
      // Ignore fullscreen errors
    }
  }, []);

  const exitPresentMode = useCallback(() => {
    setIsPresentMode(false);
    // Exit fullscreen if active
    try {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
    } catch {
      // Ignore
    }
  }, []);

  const togglePresentMode = useCallback(() => {
    if (isPresentMode) {
      exitPresentMode();
    } else {
      enterPresentMode();
    }
  }, [isPresentMode, enterPresentMode, exitPresentMode]);

  // ESC key exits presentation mode
  useEffect(() => {
    if (!isPresentMode) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        e.stopPropagation();
        exitPresentMode();
      }
    };

    // Listen for fullscreen exit (user pressed ESC in fullscreen)
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement && isPresentMode) {
        setIsPresentMode(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown, true);
    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, [isPresentMode, exitPresentMode]);

  // Apply/remove presentation mode class on body
  useEffect(() => {
    if (isPresentMode) {
      document.documentElement.classList.add("present-mode");
      document.body.classList.add("present-mode");
    } else {
      document.documentElement.classList.remove("present-mode");
      document.body.classList.remove("present-mode");
    }
    return () => {
      document.documentElement.classList.remove("present-mode");
      document.body.classList.remove("present-mode");
    };
  }, [isPresentMode]);

  return (
    <PresentationContext.Provider value={{ isPresentMode, enterPresentMode, exitPresentMode, togglePresentMode }}>
      {children}
      {/* Floating exit toolbar */}
      <AnimatePresence>
        {isPresentMode && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[9999] flex items-center gap-4 px-5 py-2.5 rounded-full bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl"
          >
            <div className="flex items-center gap-2">
              <Maximize2 className="w-3.5 h-3.5 text-[#B8860B]" />
              <span className="font-mono text-[11px] text-white/70 tracking-wider uppercase">
                Presentation Mode
              </span>
            </div>
            <div className="w-px h-4 bg-white/15" />
            <button
              onClick={exitPresentMode}
              className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            >
              <kbd className="font-mono text-[10px] text-white/50 px-1.5 py-0.5 rounded bg-white/10">ESC</kbd>
              <span className="font-mono text-[11px] text-white/60">Exit</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </PresentationContext.Provider>
  );
}

/* ========================================
 * PRESENT MODE TOGGLE BUTTON (for nav bar)
 * ======================================== */

export function DarkModeToggle() {
  const { isPresentMode, togglePresentMode } = usePresentationMode();

  return (
    <motion.button
      onClick={togglePresentMode}
      className={`relative flex items-center gap-2 px-3 py-1.5 rounded-full border text-[11px] font-mono tracking-wider uppercase transition-all ${
        isPresentMode
          ? "border-[#B8860B]/40 bg-[#B8860B]/10 text-[#B8860B]"
          : "border-[#B8860B]/55 bg-transparent text-black/55 hover:text-black/60 hover:border-[#B8860B]/60"
      }`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      title={isPresentMode ? "Exit Presentation Mode (ESC)" : "Enter Presentation Mode"}
    >
      <AnimatePresence mode="wait">
        {isPresentMode ? (
          <motion.div
            key="exit"
            initial={{ rotate: -90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: 90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <X className="w-3.5 h-3.5" />
          </motion.div>
        ) : (
          <motion.div
            key="monitor"
            initial={{ rotate: 90, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            exit={{ rotate: -90, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Monitor className="w-3.5 h-3.5" />
          </motion.div>
        )}
      </AnimatePresence>
      <span className="hidden sm:inline">
        {isPresentMode ? "Exit" : "Present"}
      </span>
    </motion.button>
  );
}

/* ========================================
 * LEGACY EXPORTS (for backward compat)
 * ======================================== */

// Keep these for any existing imports
export const DarkThemeProvider = PresentationProvider;
export function useDarkTheme() {
  const { isPresentMode, togglePresentMode } = usePresentationMode();
  return { isDarkMode: isPresentMode, toggleDarkMode: togglePresentMode };
}

// Legacy full-screen slide presentation (used by Projections page)

interface Slide {
  id: string;
  title: string;
  content: ReactNode;
}

interface PresentationModeProps {
  slides: Slide[];
  pageName: string;
}

export function PresentationMode({ slides, pageName }: PresentationModeProps) {
  const [isActive, setIsActive] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  const goToSlide = useCallback((index: number) => {
    setCurrentSlide(index);
  }, []);

  useEffect(() => {
    if (!isActive) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowRight":
        case "ArrowDown":
        case " ":
          e.preventDefault();
          nextSlide();
          break;
        case "ArrowLeft":
        case "ArrowUp":
          e.preventDefault();
          prevSlide();
          break;
        case "Escape":
          setIsActive(false);
          break;
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, nextSlide, prevSlide]);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isActive]);

  return (
    <>
      <button
        onClick={() => setIsActive(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-[#B8860B] text-white rounded-full shadow-lg shadow-[#B8860B]/20 hover:bg-[#996515] transition-all hover:scale-105 group"
        title="Enter Slide Mode"
      >
        <Maximize2 className="w-5 h-5" />
        <span className="font-mono text-sm hidden md:inline">Slides</span>
      </button>

      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9998] bg-white"
          >
            <div className="absolute top-0 left-0 right-0 h-16 bg-white/80 backdrop-blur-sm border-b border-[#B8860B]/55 flex items-center justify-between px-6 z-10">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-black/65">{pageName}</span>
                <span className="text-black/20">|</span>
                <span className="font-display font-medium text-black">{slides[currentSlide]?.title}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-black/55">
                  {currentSlide + 1} / {slides.length}
                </span>
                <button
                  onClick={() => setIsActive(false)}
                  className="p-2 hover:bg-black/5 rounded-lg transition-colors"
                  title="Exit (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="absolute inset-0 top-16 bottom-20 overflow-y-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                  className="min-h-full flex items-start justify-center p-8"
                >
                  <div className="w-full max-w-6xl">
                    {slides[currentSlide]?.content}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-20 bg-white/80 backdrop-blur-sm border-t border-[#B8860B]/55 flex items-center justify-between px-6">
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="flex items-center gap-2 px-4 py-2 bg-black/5 hover:bg-black/10 rounded-lg transition-colors disabled:opacity-30"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="font-mono text-sm hidden sm:inline">Previous</span>
              </button>

              <div className="flex items-center gap-2 overflow-x-auto max-w-[50%] px-4">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 transition-all ${
                      index === currentSlide
                        ? "w-8 h-3 bg-[#B8860B] rounded-full"
                        : "w-3 h-3 bg-[#B8860B]/20 hover:bg-[#B8860B]/40 rounded-full"
                    }`}
                    title={slide.title}
                  />
                ))}
              </div>

              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center gap-2 px-4 py-2 bg-[#B8860B] text-white hover:bg-[#996515] rounded-lg transition-colors disabled:opacity-30"
              >
                <span className="font-mono text-sm hidden sm:inline">Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default PresentationMode;
