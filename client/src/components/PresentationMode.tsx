/**
 * Presentation Mode Component
 * Converts page sections into full-screen slides for Zoom presentations
 * Features: Arrow key navigation, progress indicator, section titles
 */

import { useState, useEffect, useCallback, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Presentation, Maximize2 } from "lucide-react";

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

  // Keyboard navigation
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
        case "Home":
          e.preventDefault();
          setCurrentSlide(0);
          break;
        case "End":
          e.preventDefault();
          setCurrentSlide(slides.length - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isActive, nextSlide, prevSlide, slides.length]);

  // Lock body scroll when active
  useEffect(() => {
    if (isActive) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isActive]);

  return (
    <>
      {/* Presentation Mode Toggle Button */}
      <button
        onClick={() => setIsActive(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-full shadow-lg hover:bg-primary/90 transition-all hover:scale-105 group"
        title="Enter Presentation Mode"
      >
        <Presentation className="w-5 h-5" />
        <span className="font-mono text-sm hidden md:inline">Present</span>
        <Maximize2 className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
      </button>

      {/* Full-Screen Presentation Overlay */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background"
          >
            {/* Header Bar */}
            <div className="absolute top-0 left-0 right-0 h-16 bg-card/80 backdrop-blur-sm border-b border-border flex items-center justify-between px-6 z-10">
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-primary">{pageName}</span>
                <span className="text-muted-foreground">|</span>
                <span className="font-display font-medium">{slides[currentSlide]?.title}</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="font-mono text-sm text-muted-foreground">
                  {currentSlide + 1} / {slides.length}
                </span>
                <button
                  onClick={() => setIsActive(false)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                  title="Exit Presentation (Esc)"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Slide Content */}
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

            {/* Navigation Controls */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-card/80 backdrop-blur-sm border-t border-border flex items-center justify-between px-6">
              {/* Previous Button */}
              <button
                onClick={prevSlide}
                disabled={currentSlide === 0}
                className="flex items-center gap-2 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5" />
                <span className="font-mono text-sm hidden sm:inline">Previous</span>
              </button>

              {/* Progress Dots */}
              <div className="flex items-center gap-2 overflow-x-auto max-w-[50%] px-4">
                {slides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => goToSlide(index)}
                    className={`flex-shrink-0 transition-all ${
                      index === currentSlide
                        ? "w-8 h-3 bg-primary rounded-full"
                        : "w-3 h-3 bg-muted-foreground/30 hover:bg-muted-foreground/50 rounded-full"
                    }`}
                    title={slide.title}
                  />
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={nextSlide}
                disabled={currentSlide === slides.length - 1}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <span className="font-mono text-sm hidden sm:inline">Next</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Keyboard Hints */}
            <div className="absolute bottom-24 left-1/2 -translate-x-1/2 flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">←</kbd>
                <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">→</kbd>
                Navigate
              </span>
              <span className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded text-[10px]">Esc</kbd>
                Exit
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Helper component to wrap existing sections as slides
export function SlideWrapper({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`bg-card border border-border rounded-2xl p-8 ${className}`}>
      {children}
    </div>
  );
}

export default PresentationMode;
