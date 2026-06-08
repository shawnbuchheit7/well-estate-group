import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ZoomOut, RotateCcw, Maximize2 } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
}

export default function ImageLightbox({ src, alt, children, className }: ImageLightboxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [fitMode, setFitMode] = useState<"contain" | "full">("contain");
  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  const minScale = 0.25;
  const maxScale = 50; // Essentially unlimited for architectural drawings

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setFitMode("contain");
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleZoomIn = () => {
    setScale((prev) => Math.min(prev * 1.75, maxScale));
  };

  const handleZoomOut = () => {
    setScale((prev) => Math.max(prev / 1.75, minScale));
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const handleFitToggle = () => {
    if (fitMode === "contain") {
      // Switch to full resolution (no max constraints)
      setFitMode("full");
      setScale(2);
      setPosition({ x: 0, y: 0 });
    } else {
      setFitMode("contain");
      setScale(1);
      setPosition({ x: 0, y: 0 });
    }
  };

  const handleWheel = useCallback((e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Faster zoom for architectural drawings — 25% per scroll tick
    const factor = e.deltaY > 0 ? 0.75 : 1.35;
    setScale((prev) => {
      const newScale = Math.min(Math.max(prev * factor, minScale), maxScale);
      return newScale;
    });
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (scale > 1 || fitMode === "full") {
      setIsDragging(true);
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y,
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch support for mobile pinch-to-zoom
  const [lastTouchDist, setLastTouchDist] = useState<number | null>(null);
  const [lastTouchCenter, setLastTouchCenter] = useState<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      setLastTouchDist(dist);
      setLastTouchCenter({
        x: (e.touches[0].clientX + e.touches[1].clientX) / 2,
        y: (e.touches[0].clientY + e.touches[1].clientY) / 2,
      });
    } else if (e.touches.length === 1 && (scale > 1 || fitMode === "full")) {
      setIsDragging(true);
      setDragStart({ x: e.touches[0].clientX - position.x, y: e.touches[0].clientY - position.y });
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && lastTouchDist !== null) {
      e.preventDefault();
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / lastTouchDist;
      setScale((prev) => Math.min(Math.max(prev * factor, minScale), maxScale));
      setLastTouchDist(dist);
    } else if (e.touches.length === 1 && isDragging) {
      setPosition({
        x: e.touches[0].clientX - dragStart.x,
        y: e.touches[0].clientY - dragStart.y,
      });
    }
  };

  const handleTouchEnd = () => {
    setLastTouchDist(null);
    setLastTouchCenter(null);
    setIsDragging(false);
  };

  // Double-click to zoom to 4x at click point
  const handleDoubleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (scale > 2) {
      // Reset
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      // Zoom to 4x centered on click point
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        const clickX = e.clientX - rect.left - rect.width / 2;
        const clickY = e.clientY - rect.top - rect.height / 2;
        setScale(4);
        setPosition({ x: -clickX * 3, y: -clickY * 3 });
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") handleClose();
      if (e.key === "+" || e.key === "=") handleZoomIn();
      if (e.key === "-") handleZoomOut();
      if (e.key === "0") handleReset();
      if (e.key === "f" || e.key === "F") handleFitToggle();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, fitMode]);

  return (
    <>
      <div onClick={handleOpen} className={`cursor-zoom-in relative group ${className || ''}`}>
        {children || (
          <>
            <img loading="lazy" src={src} alt={alt} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </>
        )}
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95"
            onClick={handleClose}
          >
            {/* Controls */}
            <div className="absolute top-4 right-4 z-50 flex items-center gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomOut();
                }}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Zoom Out (-)"
              >
                <ZoomOut className="w-5 h-5" />
              </button>
              <span className="text-white text-sm font-mono font-medium min-w-[70px] text-center bg-white/5 px-2 py-1 rounded">
                {Math.round(scale * 100)}%
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleZoomIn();
                }}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Zoom In (+)"
              >
                <ZoomIn className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleFitToggle();
                }}
                className={`p-2.5 rounded-full transition-colors ${fitMode === "full" ? "bg-white/30 text-white" : "bg-white/10 hover:bg-white/20 text-white"}`}
                title="Toggle Full Resolution (F)"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleReset();
                }}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
                title="Reset (0)"
              >
                <RotateCcw className="w-5 h-5" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleClose();
                }}
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors ml-2"
                title="Close (Esc)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Zoom level indicator when zoomed */}
            {scale > 1.5 && (
              <div className="absolute top-4 left-4 z-50 text-white/70 text-xs font-mono bg-black/50 px-3 py-1.5 rounded">
                {scale.toFixed(1)}x zoom • Drag to pan • Scroll to zoom more
              </div>
            )}

            {/* Image container */}
            <div
              ref={containerRef}
              className="w-full h-full flex items-center justify-center overflow-hidden"
              onWheel={handleWheel}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
              onDoubleClick={handleDoubleClick}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onClick={(e) => e.stopPropagation()}
              style={{ cursor: scale > 1 || fitMode === "full" ? (isDragging ? "grabbing" : "grab") : "zoom-in" }}
            >
              <img
                ref={imgRef}
                src={src}
                alt={alt}
                className="select-none pointer-events-none"
                style={{
                  transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                  transformOrigin: "center center",
                  maxHeight: fitMode === "contain" ? "90vh" : "none",
                  maxWidth: fitMode === "contain" ? "90vw" : "none",
                  width: fitMode === "full" ? "auto" : undefined,
                  height: fitMode === "full" ? "auto" : undefined,
                }}
                draggable={false}
              />
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/50 text-xs font-mono">
              Scroll to zoom (up to 50x) • Drag to pan • Double-click to zoom 4x • F for full res • Esc to close
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
